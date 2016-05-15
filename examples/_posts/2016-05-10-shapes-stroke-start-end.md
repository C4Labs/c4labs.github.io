---
title: Stroke Start & End
description: Set the stroke start and end.
date:   2016-05-10 14:59:59 -0800
layout: example
categories: examples
permalink: /examples/shapes-stroke-start-end/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](stroke-start-end.png)

## Stroke Start & End Points
You can define the start and end points used to draw the stroked outline of a shape. The values must be in the range `0...1` with `0` representing the start of the path and `1` the end. Values in between zero and one are interpolated linearly along the path length.

{% highlight swift lineos %}
shape.strokeStart = 0.25
shape.strokeEnd = 0.75
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dy = Vector(x: 0, y: 2.0)

//create and array of points to use for lines
//start out one iteration below 0
var points = (Point()-dy, Point(canvas.width, 0.0)-dy)

//figure out the total number of lines to draw
let totalLineCount = canvas.height / 2.0 //default line width of 1.0

//figure out displacement of strokeStart and strokeEnd
let strokeDisplacement = 0.5 / totalLineCount

for i in 0..<Int(totalLineCount) {
    points.0 += dy
    points.1 += dy

    //create a new line
    let newLine = Line(points)

    //determine the current displacement of the ends of the line
    let ds = strokeDisplacement*Double(i)
    newLine.strokeStart = 0.5 - ds
    newLine.strokeEnd = 0.5 + ds

    canvas.add(newLine)
}
{% endhighlight %}