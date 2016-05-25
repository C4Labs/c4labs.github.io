---
title: Line Cap
description: Change the style of open ends of a polygon.
date:   2015-05-10 00:10:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-lineCap/
image: poster.png
tags: [shapes, line cap]
author: Travis Kirton
---
![](lineCap.png)

## Line Cap
You can change the `lineCap` of a shape by setting its respective property:

{% highlight swift lineos %}
shape.lineCap = .Square
{% endhighlight %}

The default width of a line is `.Round`.

There are 3 options for you to set:
{% highlight swift lineos %}
.Butt
.Round
.Square
{% endhighlight %}

## Example
{% highlight swift lineos %}
override func setup() {
    setupLines()
    setupGridLines()
    setupLabels()
}

func setupLines() {
    //create and style the first line (no need to set the lineCap because we show the default here)
    let dy = Vector(x: 0, y: canvas.height/4.0)
    var points = (Point(canvas.width/4, 0) + dy, Point(canvas.width*3/4, 0) + dy)

    let line1 = Line(points)
    line1.lineWidth = 30.0

    //create and style the second line
    points.0 += dy
    points.1 += dy
    let line2 = Line(points)
    line2.strokeColor = C4Blue
    line2.lineWidth = 30.0
    line2.lineCap = .Square

    //create and style the third line
    points.0 += dy
    points.1 += dy
    let line3 = Line(points)
    line3.strokeColor = C4Pink
    line3.lineWidth = 30.0
    line3.lineCap = .Butt

    //add all the lines to the canvas
    canvas.add(line1)
    canvas.add(line2)
    canvas.add(line3)
}

func setupGridLines() {
    //set the points for the first grid line
    var points = (Point(canvas.width/4, 0), Point(canvas.width/4, canvas.height))

    //create the first line and style it with width and a dash pattern
    let gridLine1 = Line(points)
    gridLine1.lineDashPattern = [2]

    //create the second line and style it with width and a dash pattern
    let dx = Vector(x: canvas.center.x, y: 0)
    points.0 += dx
    points.1 += dx
    let gridLine2 = Line(points)
    gridLine2.lineDashPattern = [2]

    //add the lines to the canvas
    canvas.add(gridLine1)
    canvas.add(gridLine2)
}

func setupLabels() {
    //create a font to use for all the labels
    let f = Font(name: "Helvetica", size:20)!

    //create, style and add the first label, with text describing its lineCap type
    let dy = Vector(x: 0, y: canvas.height/4.0)
    var l = TextShape(text: ".Round", font: f)!
    l.fillColor = white
    l.center = canvas.center - dy
    canvas.add(l)

    //create, style and add the second label, with text describing its lineCap type
    l = TextShape(text: ".Square", font: f)!
    l.fillColor = white
    l.center = canvas.center
    canvas.add(l)

    //create, style and add the third label, with text describing its lineCap type
    l = TextShape(text: ".Butt", font: f)!
    l.fillColor = white
    l.center = canvas.center + dy
    canvas.add(l)
}
{% endhighlight %}