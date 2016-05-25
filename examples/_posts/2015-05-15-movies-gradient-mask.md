---
title: Gradient Mask
description: Apply a Gradient mask to a movie.
date:   2015-05-15 00:03:00 -0800
layout: example
categories: examples, movies
permalink: /examples/movies-gradient-mask/
image: poster.png
tags: [movies, gradients, masking]
author: Travis Kirton
---
![](gradient-mask.png)

## A Masked Movie
Like any other visible object, movies can be masked. Here's how:

{% highlight swift lineos %}
movie.mask = mask
{% endhighlight %}

## Example
{% highlight swift lineos %}
let color = Movie("halo.mp4")!
let gray = Movie("haloGray.mp4")!

color.frame = canvas.frame
color.play()

gray.frame = canvas.frame
gray.muted = true
gray.play()

let g = Gradient(frame: gray.bounds)
g.colors = [clear, white]
g.locations = [0, 0.5]
g.endPoint = Point(1, 1)
gray.mask = g

canvas.add(color)
canvas.add(gray)
{% endhighlight %}
