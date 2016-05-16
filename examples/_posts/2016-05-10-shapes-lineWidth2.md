---
title: Line Width 2
description: Change the thickness of a shape's line.
date:   2016-05-10 17:59:59 -0800
layout: example
categories: examples
permalink: /examples/shapes-lineWidth2/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](lineWidth.png)

## Line Width
This example puts a little `pow` into the width of lines.

## Example
{% highlight swift lineos %}
var points = (Point(), Point(canvas.width, 0))

var step = 0.0
repeat {
    let width = pow(1.1, step)
    //shift the line points based on the current line width (with a little gap)
    let dy = Vector(x: 0, y: width+1)
    points.0 += dy
    points.1 += dy

    let newLine = Line(points)
    newLine.lineWidth = width
    canvas.add(newLine)
    step += 1.0
}
{% endhighlight %}
