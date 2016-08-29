---
title: Bees & Bombs
description: Rebuilding a gif from Bees & Bombs
date:   2016-08-28 00:00:00 -0800
layout: tutorial
length: 10 - 20 minutes
categories: tutorials
permalink: /tutorials/beesAndBombs/
image: poster.gif
tags: [tutorial, animation, illusion]
author: Travis Kirton
---
# Bees & Bombs
In this tutorial we're going to reconstruct a lovely gif posted by [Bees & Bombs](https://beesandbombs.tumblr.com). The specific gif is one they posted on [twitter](https://twitter.com/beesandbombs/status/769135862831575044), which is slightly different (only in color) from their [dribble post](https://dribbble.com/shots/2924374-Square-Circles).

Here's what we'll be building: 

![](beesbombs.gif)

Let's get to it.

## Breakdown
Visually, there are 4 circles, each with a cut-out that rotates (sometimes in sync with the circle, sometimes not). This seems like it would be pretty tough to recreate, what with the changing shape of the cutouts.

However, to recreate this we only need to _simulate_ the cut outs. If we think about the shapes in terms of stacked layers, the animation ends up being pretty straight forward.

### How we'll break things down
To achieve the visual effect of the gif we're going to use (instead of 4 circles) the following layers:

1. 1 invisible container to rotate _all_ of the circles
2. 4 black circles
3. 4 white wedges _that look like cut outs_
4. 1 view with a white background _that lookes like all the cutouts put together_

> 10 things not 4!

Here's a snapshot of the layers as seen from Xcode:

![The small white squares are the frames of the wedge cut-outs. The large one in front is the rotating white view.](layers.png)

## The Circles & Squares (cutouts)
We can do this step in one shot. What we'll do is:

1. Create a container (which handles the rotating back / forth)
2. Create 2 arrays to reference the circles and the wedges.
3. Create 4 circles
4. Add a small wedge to each circle
5. Style everything

Your setup will look like this:

{% highlight swift lineos %}
var circles = [Circle]()
var wedges = [Wedge]()

override func setup() {
    let d = 160.0 //radius of circle
    canvas.backgroundColor = white

    let container = View(frame: Rect(0,0,d,d))
    container.center = canvas.center
    canvas.add(container)
    
    let points = [Point(), Point(d,0), Point(d,d), Point(0,d)]
    for i in 0...3 {
        let circle = Circle(center: points[i], radius: d/2.0 - 5.0)
        circle.fillColor = black
        circle.lineWidth = 0
        circles.append(circle)
        container.add(circle)

        let wedge = Wedge(center: circle.bounds.center, radius: d/2, start: M_PI_2 * Double(i), end: M_PI_2 * (1+Double(i)))
        wedge.fillColor = white
        wedge.lineWidth = 0.0
        wedges.append(wedge)
        circle.add(wedge)
    }
}
{% endhighlight %}

> Hit Run.

This is what your sketch should now look like! Pretty spot-on, right?

![](staticCircles.png)

Now, if you comment out the lines that style the wedges, you'll see that they look like this:

{% highlight swift lineos %}
//wedge.fillColor = white
//wedge.lineWidth = 0.0
{% endhighlight %} 

![](visibleWedges.png)

## The Main Square
The animation also has a component where all "the cutouts" move in unison. We're going to handle this by adding a white view over top of everything so it will look like the wedges are moving together.

> Add the following to the end of your `setup` method

{% highlight swift lineos %}
let mainSquare = View(frame: container.frame)
mainSquare.backgroundColor = white
mainSquare.hidden = true
canvas.add(mainSquare)
{% endhighlight %} 

That's it. There's a white square on top of where the wedges already make it look like a white square.

    Note: we turned the visibility of the square off for now.

## The Animations
When I first tried making the animations it seemed like I could do `repeats = true` and `reverses = true` on them. However, I realized that there's actually a little bit of a gap between rotations, so I found it better to break the rotations into 2 animations that call one another continuously.

Before we continue, add the following constant to your `setup` method:

{% highlight swift lineos %}
let ϴ = M_PI
{% endhighlight %}

### Forward & Backward 
The two animations are broken up into forward (clockwise) and backward (counterclockwise). 

The basic steps are:

1. the circles do a full rotation
2. the group does a quarter rotation

These steps are applied for both directions.

#### Forward
The forward animation looks like this:

> Add the following to `setup`:

{% highlight swift lineos %}
let containerRotateForward = ViewAnimation(duration: 1.25) {
    for circle in self.circles {
        circle.rotation += ϴ * 2.0 //each circle does a full rotation
    }
    container.rotation += ϴ / 2.0 //the container does a quarter rotation
}
containerRotateForward.delay = 0.25 //the animation waits 0.25s to start
containerRotateForward.curve = .EaseInOut
{% endhighlight %}

#### Backward
The backward rotation looks like this.

> Add the following to `setup`:

{% highlight swift lineos %}
let containerRotateBackward = ViewAnimation(duration: 1.25) {
    for circle in self.circles {
        circle.rotation -= ϴ * 2.0 //each circle does a full rotation
    }
    container.rotation -= ϴ / 2.0 //the container does a quarter rotation
    mainSquare.rotation += ϴ / 2.0 //the main square does full rotation
}

containerRotateBackward.delay = 0.25
containerRotateBackward.curve = .EaseInOut
{% endhighlight %} 

### Completion Observers
To create the cycling animation, we're going to call the forward and backward animations from one another's completion observers. We're also going to handle the behaviour of the large square animation by toggling the visibility of the wedges and `mainSquare`.

#### Forward Completion
After a forwards rotation we can reveal `mainSquare` so that it's ready to spin. We also hide the wedges before initiating `containerRotateBackward`.

> Add the following to `setup`:

{% highlight swift lineos %}
containerRotateForward.addCompletionObserver {
    mainSquare.hidden = false //reveal the main square
    for wedge in self.wedges {
        wedge.hidden = true //hide the wedges
    }
    containerRotateBackward.animate()
}
{% endhighlight %} 

#### Backward Completion
The exact opposite of the previous completion, toggles the visibility of the wedges and `mainSquare` in preparation for the forward animation.

> Add the following to `setup`:

{% highlight swift lineos %}
containerRotateBackward.addCompletionObserver {
    mainSquare.hidden = true //hide the main square
    for wedge in self.wedges {
        wedge.hidden = false //reveal the wedges
    }
    containerRotateForward.animate()
}
{% endhighlight %} 

### Animate it!
We're just about done.

> Add the following to the end of `setup`:

{% highlight swift lineos %}
containerRotateForward.animate()
{% endhighlight %} 

> Hit Run!

## Finito!
That's it. We broke down what looked like a complex animation of 4 shapes into a process of animating 6 layers (i.e. 5 shapes, a container and a main square), while toggling 5 separate layers (i.e. the wedges and the main square).

For a complete copy of the code, see this gist: [Bees + Bombs](https://gist.github.com/C4Framework/d693bab4956b6ce8eb3f06f93d20a158)

And, if you want to see how this could be done with masks: [Bees + Bombs w/ Masks](https://gist.github.com/C4Framework/76000617a2a4a9f8f23fba6bfa5807b8)