---
title: Fill Rule
description: Even, Odd? Change how you fill a complex shape.
date:   2016-05-10 07:59:59 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-fillRule/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](fillRule.png)

## Fill Rule
When you have a complex shape you can change how it's overlapping areas draw their fill.

{% highlight swift lineos %}
shape.lineCap = .EvenOdd
{% endhighlight %}

The default width of a line is `.NonZero`.

There are 2 options for you to set:
{% highlight swift lineos %}
.NonZero
.EvenOdd
{% endhighlight %}

## Example
{% highlight swift lineos %}
var poly1, poly2: Polygon!

override func setup() {
    createPolygons()
    createLabels()

    //define the fill rules for each polygon
    poly1.fillRule = .NonZero //Default value
    poly2.fillRule = .EvenOdd
}

func createPolygons() {
    let points = [Point(),
                  Point(150, -150),
                  Point(200, -100),
                  Point(100, 0),
                  Point(0, -100),
                  Point(50, -150),
                  Point(200, 0)]

    //create poly1 and style it
    poly1 = Polygon(points)
    poly1.fillColor = C4Blue
    poly1.center = Point(canvas.width/3, canvas.center.y)

    //create poly2 and style it
    poly2 = Polygon(points)
    poly2.fillColor = C4Blue
    poly2.center = Point(canvas.width*2/3, canvas.center.y)

    //add all the polygons to the canvas
    canvas.add(poly1)
    canvas.add(poly2)
}

func createLabels() {
    let f = Font(name: "Helvetica", size: 30)!

    //create the NonZero label, center it to the base of poly1
    let lableNormal =  TextShape(text: ".NonZero", font: f)!
    lableNormal.center = poly1.center
    lableNormal.center.y += poly1.height/2 + lableNormal.height
    canvas.add(lableNormal)

    //create the EvenOdd label, center it to the base of poly2
    let labelEvenOdd =  TextShape(text: ".EvenOdd", font: f)!
    labelEvenOdd.center = poly2.center
    labelEvenOdd.center.y += poly2.height/2 + labelEvenOdd.height
    canvas.add(labelEvenOdd)
}
{% endhighlight %}