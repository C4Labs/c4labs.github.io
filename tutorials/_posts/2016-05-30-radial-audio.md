---
title: Radial Audio
description: Radiating an audio sample's levels.
date:   2016-05-30 00:00:00 -0800
layout: tutorial
length: 10 - 20 minutes
categories: tutorials
permalink: /tutorials/radial-audio/
image: poster.png
tags: [tutorial, animation, audio, timer, metering]
author: Travis Kirton
---
# Radial Audio
 I built a loading view for a 28-iPad installation I've been working on over at [Logic&Form](http://www.logicandform.com). The majority of code focuses on the setup and styling of shapes, so it is straightforward. The outcome is a dynamic radial visualization of sound that uses timers, audio samples and metering.

Here's what we'll be building: 

![](){: data-id="JadedDishonestCollardlizard" .gfyitem }

Let's get to it.

## Breakdown
Visually, there are 5 elements: an image and four polygons. Behind the scenes, there are an additional 3 elements: a timer, an audio player and an audio sample. The four lines represents the peak and average power readings for each of the two channels in our audio sample.

![](radialAudio.png)

### First a Little WOULG
The audio sample we're using in this tutorial is a short version of [Black Velvet](http://woulg.bandcamp.com/track/black-velvet) a song by [WOULG](http://woulg.bandcamp.com)... and definitely NOT [Alannah Myles](https://www.youtube.com/watch?v=tkXNEmtf9tk). You should definitely check out interview [Homegrown: Woulg](http://www.freqmagazine.com/homegrown-woulg/), by Freq Magazine. I like how it starts: 

**"A psychonaut can be described as a person taking a trip into the depths of ideas."**

### Start With Some Vars
We know we need a few things to start, so let's just add them in now.

In your project's `WorkSpace` add the following variables:

{% highlight swift lineos %}
var player: AudioPlayer!
var timer: Timer?

//create tuples for storing paths
var maxPaths = (Path(), Path())
var avgPaths = (Path(), Path())

//create tuples for storing shapes to represent the paths
var maxShapes = (Shape(), Shape())
var avgShapes = (Shape(), Shape())

//the current angle for drawing
var Θ = 0.0

//store the max values for peak and average for the sample
//we will use these to normalize the metered values
var maxPeak = (30.981050491333, 31.1506500244141)
var avgPeak = (63.9939880371094, 63.8977127075195)
{% endhighlight %}

These should all be placed before your `setup()` and for the most part should be self-explanatory. However, there are a few things to note: 

1. We need to store `paths` and `shapes` because it's the paths we're going to continuously add  points to these, then update the visible shapes with them
2. We use a `!` for the audio player only for simplicity
3. I previously ran a small demo to extract the `maxPeak` and `avgPeak` values from the audio sample we're using.

> Check this link for the code that I used to generate the max / avg values: [Max Avg](https://gist.github.com/C4Framework/ad06eaa2b1dbcb81df6ae1efa6cc5477)

## Set Everything Up
To make the main `setup()` cleaner, we'll break down all the necessary steps into discreet functions. 

### Shapes
We've already initialized our paths as class-level tuples, so we can use them to create and setup our shapes.

First, we're going to be styling our shapes consistently, so add this simple method to your `WorkSpace`:

{% highlight swift lineos %}
func styleShape(shape: Shape) {
    shape.lineWidth = 0.5
    shape.fillColor = clear
    shape.strokeColor = black
}
{% endhighlight %}

Then, add the following method:

{% highlight swift lineos %}
func setupShapes() {
    //set the paths for each shape
    maxShapes.0.path = maxPaths.0
    maxShapes.1.path = maxPaths.1

    avgShapes.0.path = avgPaths.0
    avgShapes.1.path = avgPaths.1

    //style all the shapes
    styleShape(maxShapes.0)
    styleShape(maxShapes.1)
    styleShape(avgShapes.0)
    styleShape(avgShapes.1)

    //add them all the the canvas
    canvas.add(maxShapes.0)
    canvas.add(maxShapes.1)
    canvas.add(avgShapes.0)
    canvas.add(avgShapes.1)

    //rotate the 2nd, 3rd, and 4th shapes
    maxShapes.1.transform.rotate(M_PI)
    avgShapes.0.transform.rotate(M_PI_2)
    avgShapes.1.transform.rotate(M_PI_2 * 3)
}
{% endhighlight %}

A key thing to note is that there are 4 shapes, three of which we rotate. We do this so that their starting positions don't overlap. 

### Player
First, grab the audio sample for this tutorial and drag it into your project: [BlackVelvet.m4a](http://www.c4ios.com/images/tutorials/radial-audio/BlackVelvet.m4a)

Next, create the audio player by adding this method:

{% highlight swift lineos %}
func setupPlayer() {
    player = AudioPlayer("BlackVelvet.mp3")
    player?.meteringEnabled = true //needs to be on
    player?.loops = true
    player?.play()
}
{% endhighlight %}

We want to extract the meters from each of the channels in our audio sample. So, before starting playback we need to set `meteringEnabled = true`. This makes sure that when we request the average or peak values for a channel that we get actual numbers.

### Logo
First, grab, unzip and add the 3 logo images to the Images.xcassets folder in your project. Here's the zip: [LFLogo.zip](http://www.c4ios.com/images/tutorials/radial-audio/LFLogo.zip)

Here's what your project should look like: 

![](LFLogoXcode.png)

Now, add this method to your `WorkSpace`:

{% highlight swift lineos %}
func setupLogo() {
    let logo = Image("LFLogo")
    logo?.anchorPoint = Point(0.337, 0.468)
    logo?.center = canvas.center
    canvas.add(logo)
}
{% endhighlight %}

### Run it.
To check that everything works nicely, you need to edit your main `setup` to look like this:

{% highlight swift lineos %}
override func setup() {
    canvas.backgroundColor = Color(red: 0.933, green: 1.0, blue: 0.0, alpha: 1.0)
    setupShapes()
    setupPlayer()
    setupLogo()
}
{% endhighlight %}

Hit play in Xcode. You should hear the sample play, and see this:

![](basicSetup.png)

## Metering & Updating
The next main thing we need to do is create the infrastructure for reading the audio meters and updating the shapes. To do this we'll create a few methods for extracting values, updating paths, and run everything using a timer.

### Generating Points
Every time our timer fires, we're going to want to grab the current meters. From there, we're going to convert the values to points via some polar coordinate math.

#### Polar Coordinates
Add the following method to your `WorkSpace`:

{% highlight swift lineos %}
func generatePoint(radius: Double) -> Point {
    return Point(radius * cos(Θ), radius * sin(Θ))
}
{% endhighlight %}

This takes a value and converts it to a `Point()`, using the current angle (`Θ`).

#### Normalizing Audio Values
Before we generate Points, we're going to extract the audio values. These come in from our audio player in a pretty raw format (often ranging well below 0). 

We'll use the following method to convert our values to something we can use. Add this to your `WorkSpace`:

{% highlight swift lineos %}
func normalize(val: Double, max: Double) -> Double {
    //Normalizes an incoming value based on a provided max
    var normMax = abs(val)
    //gives us a value between 0 and 1
    normMax /= max
    //map the value so that the shape doesn't overlap with the logo
    return map(normMax, min: 0, max: 1, toMin: 100, toMax: 200)
}
{% endhighlight %}

This takes a negative value and converts it to positive. Then, it normalizes the incoming value based on the current `max` parameter, giving a range between `0...1`. Finally, we map the normalized value to the following range: `100...200`. 

> This mapped value will be the radius we use to generate a point.

#### Generate Points for All Paths
For each path we will extract the current channel value, convert it to a point, and then add it to the given path. Add the following to your `WorkSpace`:

{% highlight swift lineos %}
func generateNextPoints() {
    //generates new points for each path
    let max0 = normalize(player.peakPower(0), max: maxPeak.0)
    maxPaths.0.addLineToPoint(generatePoint(max0))

    let max1 = normalize(player.peakPower(1), max: maxPeak.1)
    maxPaths.1.addLineToPoint(generatePoint(max1))

    let avg0 = normalize(player.averagePower(0), max: avgPeak.0)
    avgPaths.0.addLineToPoint(generatePoint(avg0))

    let avg1 = normalize(player.averagePower(1), max: avgPeak.1)
    avgPaths.1.addLineToPoint(generatePoint(avg1))

    //increments the current angle
    Θ += M_PI / 180.0

    //resets the paths for each full rotation
    if Θ >= 2 * M_PI {
        Θ = 0.0
        resetPaths()
    }
}
{% endhighlight %}

After extracting, converting and adding all the points to our paths, this method also increments our current angle (`Θ`) and will also reset the paths for each 360 degree revolution.

### Updating Shapes
In C4 you can conveniently update the path of a `Shape`. For simple paths this process is extremely fast, so even if the shape is complex the device will still be able to update and redraw the shape.

Add the following method to your `WorkSpace`:

{% highlight swift lineos %}
func updateShapes() {
    //set the path for each shape, and recenter it
    maxShapes.0.path = maxPaths.0
    maxShapes.0.center = canvas.center

    maxShapes.1.path = maxPaths.1
    maxShapes.1.center = canvas.center

    avgShapes.0.path = avgPaths.0
    avgShapes.0.center = canvas.center

    avgShapes.1.path = avgPaths.1
    avgShapes.1.center = canvas.center
}
{% endhighlight %}

Updating the path won't keep it in the same position. So, all we need to do is recenter the shape after each update. (Also fast).

### Timer It Out
The final step for this tutorial is to set up a timer that will fire at `60fps`. Add the following method to your `WorkSpace`:

{% highlight swift lineos %}
func setupTimer() {
    //create a timer to run at 60fps
    timer = Timer(interval: 1.0/60.0) {
        self.player.updateMeters()
        self.generateNextPoints()
        self.updateShapes()
    }
    timer?.start()
}
{% endhighlight %}

In sequence, and 60 times per second, this timer will udpate the player's meters, then generate points, then udpate the visible shapes. 

Simple, right?

#### Set It Up
Now, call this method at the end of your main `setup()` and run the project.

{% highlight swift lineos %}
override func setup() {
    canvas.backgroundColor = Color(red: 0.933, green: 1.0, blue: 0.0, alpha: 1.0)
    setupShapes()
    setupPlayer()
    setupLogo()
    setupTimer()
}
{% endhighlight %}

### Code & Links
You can grab a copy of the code for this tutorial from here:

[Radial Audio Tutorial](https://gist.github.com/C4Framework/bdf1a71d1efae9b87d90a4c3a4258618)

And, here are the media links for the logo and audio files:

[LFLogo.zip](http://www.c4ios.com/images/tutorials/radial-audio/LFLogo.zip)

[BlackVelvet.m4a](http://www.c4ios.com/images/tutorials/radial-audio/BlackVelvet.m4a)

Finito.