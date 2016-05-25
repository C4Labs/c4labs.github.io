---
title: Stretching Movies
description: Set the width, height or frame of a movie.
date:   2016-06-01 00:01:00 -0800
layout: example
categories: examples, movies
permalink: /examples/movies-stretching/
image: poster.png
tags: [movies]
author: Travis Kirton
---
![](stretching.png)

## Stretching Movies
This example shows how you can stretch and set the size of a movie.

> Unlike images, `constrainsProportions` is `true` by default.

### Width
You can set the `width` of an image like so:
{% highlight swift lineos %}
mov.width = 100.0
{% endhighlight %}

### Height
You can set the `height` of an image like so: 

{% highlight swift lineos %}
mov.height = 100.0
{% endhighlight %}

### Frame
You can set the `frame` of an image like so: 

{% highlight swift lineos %}
mov.frame = canvas.frame
{% endhighlight %}

## Example
{% highlight swift lineos %}
let normal = Movie("halo.mp4")!
normal.height = 240
normal.center = canvas.center

let tall = Movie("halo.mp4")!
tall.frame = normal.frame
tall.constrainsProportions = false
tall.height = canvas.height
tall.center = canvas.center

let wide = Movie("halo.mp4")!
wide.frame = normal.frame
wide.constrainsProportions = false
wide.width = canvas.width
wide.center = canvas.center

let full = Movie("halo.mp4")!
full.frame = canvas.frame

let movies = [normal, tall, wide, full]
for mov in movies {
    mov.opacity = 0.66
    mov.border.color = white
    mov.border.width = 0.5
    mov.muted = true
    mov.loops = true
    mov.play()
}
normal.muted = false

canvas.add(full)
canvas.add(tall)
canvas.add(wide)
canvas.add(normal)
{% endhighlight %}
