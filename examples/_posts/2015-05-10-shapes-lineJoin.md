---
title: Line Join
description: Change the joint style of a polygon.
date:   2015-05-10 16:59:59 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-lineJoin/
image: poster.png
tags: [shapes, line]
author: Travis Kirton
---
![](lineJoin.png)

## Line Join
You can change the `lineJoin` of a shape by setting its respective property:

{% highlight swift lineos %}
shape.lineJoin = .Bevel
{% endhighlight %}

The default width of a line is `.Miter`.

There are 3 options for you to set:
{% highlight swift lineos %}
.Bevel
.Miter
.Round
{% endhighlight %}

## Example
{% highlight swift lineos %}
var poly1, poly2, poly3: Polygon!

override func setup() {
    createAndStylePolygons()
    createLabels()

    //set the lineJoin property for each shape
    poly1.lineJoin = .Miter //This is the default value
    poly2.lineJoin = .Round
    poly3.lineJoin = .Bevel
}

func createAndStylePolygons() {
    //the base width for the polygons
    let base = 125.0
    let height = sqrt(3)/4.0 * base // half the height of an equilateral
    let polyPoints = [Point(), Point(base/2, -height), Point(base, 0)]

    let dx = Vector(x: canvas.width/4, y: 0)
    //create poly1 and style it
    poly1 = Polygon(polyPoints)
    poly1.lineWidth = 20.0
    poly1.center = canvas.center - dx

    //create poly2 and style it
    poly2 = Polygon(polyPoints)
    poly2.strokeColor = C4Blue
    poly2.lineWidth = 20.0
    poly2.center = canvas.center
    poly2.lineJoin = .Round

    //create poly3 and style it
    poly3 = Polygon(polyPoints)
    poly3.strokeColor = C4Pink
    poly3.lineWidth = 20.0
    poly3.center = canvas.center + dx

    //add all the polygons to the canvas
    canvas.add(poly1)
    canvas.add(poly2)
    canvas.add(poly3)
}

func createLabels() {
    let f = Font(name: "Helvetica", size:30.0)!

    //create the JOINMITER label, center it to the base of poly1
    var l = TextShape(text: ".Miter", font: f)!
    var center = poly1.center
    center.y += poly1.height
    l.center = center
    canvas.add(l)

    //create the JOINROUND label, center it to the base of poly2
    l = TextShape(text: ".Round", font: f)!
    center = poly2.center
    center.y += poly2.height
    l.center = center
    canvas.add(l)

    //create the JOINBEVEL label, center it to the base of poly3
    l = TextShape(text: ".Bevel", font: f)!
    center = poly3.center
    center.y += poly3.height
    l.center = center
    canvas.add(l)
}
{% endhighlight %}