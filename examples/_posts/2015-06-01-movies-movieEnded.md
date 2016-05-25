---
title: movieEnded
description: Do stuff automatically when a movie reaches its end point.
date:   2015-06-01 00:02:00 -0800
layout: example
categories: examples, movies
permalink: /examples/movies-movieEnded/
image: poster.png
tags: [movies]
author: Travis Kirton
---
![](movieEnded.png)

## The end of a Movie
You can run some code when a movie reaches its end point. To do so, you set the `movieEnded` property like this:

{% highlight swift lineos %}
movie.reachedEnd {
    //do stuff
}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let movie = Movie("halo.mp4")!
movie.width = canvas.width
movie.center = canvas.center
canvas.add(movie)
movie.play()

movie.reachedEnd {
    let a = ViewAnimation(duration: 0.5) {
        movie.width = 50.0
        movie.center = self.canvas.center
    }
    a.autoreverses = true
    a.addCompletionObserver {
        movie.width = self.canvas.width
        movie.center = self.canvas.center
    }
    a.animate()
}

{% endhighlight %}
