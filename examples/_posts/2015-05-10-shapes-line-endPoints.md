---
title: Line End Points
description: Change the end points of a Line.
date:   2015-05-10 00:11:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-line-endPoints/
image: poster.png
tags: [shapes, line, end points]
author: Travis Kirton
---
![](endPoints.png)

## End Points
You can change the end points of a line by setting either one, or both at the same time:

{% highlight swift lineos %}
shape.endPoints.0 = Point()
shape.endPoints.1 = Point(50, 50)
shape.endPoints = (Point(), Point(50, 50))
{% endhighlight %}

## Example
{% highlight swift lineos %}
//create a set of default points for all the lines
let dx = Vector(x: 100, y: 0)
let linePoints = [canvas.center - dx, canvas.center + dx]

//create each line and style it, if necessary
let line1 = Line(linePoints)
let line2 = Line(linePoints)
line2.strokeColor = C4Pink
let line3 = Line(linePoints)
line3.strokeColor = C4Blue

//add all the lines to the canvas
self.canvas.add(line1)
self.canvas.add(line2)
self.canvas.add(line3)

//animate
let dy = Vector(x: 0, y: 100)
let a = ViewAnimation(duration:1.0) {
    line1.endPoints.0 += dy
    line2.endPoints.1 -= dy
}

a.repeats = true
a.autoreverses = true
a.delay = 1.0
a.animate()
{% endhighlight %}

![](){: data-id="MediocreTerrificBillygoat" .gfyitem }
