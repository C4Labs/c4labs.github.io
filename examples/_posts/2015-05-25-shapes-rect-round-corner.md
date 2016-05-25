---
title: Rounded Corners
description: Create text shapes using fonts and strings.
date:   2015-05-25 00:21:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-rect-round-corner/
image: poster.png
tags: [shapes, rectangle, corner]
author: Travis Kirton
---
![](rect-round-corner.png)

## Rounded Corners
It's easy to round (or sharpen) the corners of a `Rectangle`, just do this:

{% highlight swift lineos %}
rect.corner = Size(10,10)
{% endhighlight %}

> The default is `{8, 8}`.

## Example
{% highlight swift lineos %}
let dx = Vector(x: canvas.width/4, y: 0)

let f = Rect(0, 0, 120, 120)

let r1 = Rectangle(frame: f)
r1.corner = Size()
r1.center = canvas.center - dx

let r2 = Rectangle(frame: f)
r2.center = canvas.center //default > {8, 8}

let r3 = Rectangle(frame: f)
r3.corner = Size(30, 30)
r3.center = canvas.center + dx

canvas.add(r1)
canvas.add(r2)
canvas.add(r3)
{% endhighlight %}
