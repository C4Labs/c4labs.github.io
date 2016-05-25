---
title: Arcs & Wedges
description: Create arcs and wedges.
date:   2016-05-25 00:03:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-arcs-wedges/
image: poster.png
tags: []
author: Travis Kirton
---
![](arcs-wedges.png)

## Arcs & Wedges
Creating an arc or a wedge is very similar to creating a circle. The only difference is you specify a `start` angle, an `end` angle and whether or not the shape draws in a `clockwise` direction.

Arcs draw with a line going from endpoint to endpoint, where wedges create a pie-slice drawing from the specified center point.

Arcs and Wedges have nearly the same initializers:
{% highlight swift lineos %}
let arc = Arc(center: c, radius: 100, start: M_PI_4, end: M_PI, clockwise: false)
let wedge = Wedge(center: c, radius: 100, start: M_PI_4, end: M_PI, clockwise: false)
{% endhighlight %}

## Example
{% highlight swift lineos %}
var arcCenter = Point(canvas.width/3.0, canvas.center.y)
var wedgeCenter = Point(2.0 * canvas.width/3.0, canvas.center.y)

//create the counter-clockwise arc
let counterClockwiseArc = Arc(center: arcCenter,
                              radius: 100,
                              start: 1.125 * M_PI,
                              end: 1.875 * M_PI,
                              clockwise: false)

//create the clockwise arc, first shifting the center of the arc
arcCenter.y -= 10
let clockwiseArc = Arc(center: arcCenter,
                       radius: 100,
                       start: 1.125 * M_PI,
                       end: 1.875 * M_PI,
                       clockwise: true)

//create the counter-clockwise wedge
let counterClockwiseWedge = Wedge(center: wedgeCenter,
                                  radius: 100,
                                  start: M_PI_4 * 3,
                                  end: M_PI_4,
                                  clockwise: false)

//create the clockwise wedge, first shifting the center of the wedge
wedgeCenter.y -= 10
let clockwiseWedge = Wedge(center: wedgeCenter,
                           radius: 100,
                           start: M_PI_4 * 3,
                           end: M_PI_4,
                           clockwise: true)

//add the shapes to the canvas
canvas.add(counterClockwiseArc)    //bottom
canvas.add(clockwiseArc)           //top
canvas.add(counterClockwiseWedge)  //bottom
canvas.add(clockwiseWedge)         //top
{% endhighlight %}
