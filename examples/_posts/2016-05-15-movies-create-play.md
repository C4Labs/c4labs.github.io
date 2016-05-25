---
title: Creating Movies
description: Create, play and pause a movie.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples, movies
permalink: /examples/movies-create-play/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](create-play.png)

## Creating Movies
Included with the default installer are two movies, `"halo"` and `"haloGray"`, that you can expriment with:

![](defaultMovies.png)

To create a movie, simply specify the file name of the image like so:

{% highlight swift lineos %}
let m = Movie("halo.mp4")
{% endhighlight %}

> Unlike images, you **have to** specify the file extension of a movie.

### Play()
You can initiate playback like so:

{% highlight swift lineos %}
movie.play()
{% endhighlight %}

### Pause()
You can pause playback like so:

{% highlight swift lineos %}
movie.pause()
{% endhighlight %}

> Pausing keeps the movie's current time, when you hit `play()` again it will resume from where it left off

### Stop()
You can stop playback like so:

{% highlight swift lineos %}
movie.stop()
{% endhighlight %}

> Stopping resets the movie's current time, when you hit `play()` again it will resume from its beginning

### Playing
You can check to see whether or not a movie is currently playing, like this:

{% highlight swift lineos %}
if movie.playing {
    //do stuff
}
{% endhighlight %}

## Example
{% highlight swift lineos %}
//create a movie and play it automatically
let movie = Movie("halo.mp4")!
movie.width = canvas.width
movie.play()
canvas.add(movie)

canvas.addTapGestureRecognizer { locations, center, state in
    movie.playing ? movie.pause() : movie.play()
}
{% endhighlight %}
