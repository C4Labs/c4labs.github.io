---
title: Curves
description: Create Bezier and Quad Curves.
date:   2015-05-25 00:04:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-curves/
image: poster.png
tags: [shapes, curves]
author: Travis Kirton
---
![](curves.png)

## Curves
To create a bezier curve you specify end points and control points. Quad curve require only a single point.

{% highlight swift lineos %}
let bezier = Curve(begin: p.0, control0: c.0, control1: c.1, end: p.1)
{% endhighlight %}

{% highlight swift lineos %}
let quad = QuadCurve(begin: p.0, control: c, end: p.1)
{% endhighlight %}

## Example
{% highlight swift lineos %}
var points = (Point(canvas.width/4, canvas.height/3),
              Point(canvas.width*3/4, canvas.height/3))
let dy = Vector(x: 0, y: 200)
let bezier = Curve(begin: points.0,
                   control0: points.0 - dy,
                   control1: points.1 + dy,
                   end: points.1)
canvas.add(bezier)

points.0.y *= 2.0
points.1.y *= 2.0
let quad = QuadCurve(begin: points.0, control: canvas.center + dy, end: points.1)

canvas.add(quad)
{% endhighlight %}