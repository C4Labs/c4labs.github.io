---
title: Polygons
description: Create lines, triangles and non-uniform polygons.
date:   2015-05-10 22:59:59 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-polygons/
image: poster.png
tags: [shapes, polygons]
author: Travis Kirton
---
![](polygons.png)

## Lines, Triangles and Polyogns
To create a line, a triangle or a polygon you specify an array of points that the shape will use to build itself.

Lines require 2 points:
{% highlight swift lineos %}
let points = [Point(0, 0), Point(100, 100)]
let line = Line(points)
{% endhighlight %}

> You can also use a tuple to create a line: `Line((Point(), Point()))`

Triangles require 3 points:
{% highlight swift lineos %}
let points = [Point(0, 100), Point(100, 100), Point(100, 0)]
let triangle = Triangle(points)
{% endhighlight %}
 
Polygons require 2 or more points.
{% highlight swift lineos %}
let points = [Point(0, 0), Point(100, 0), Point(100, 100), Point(0, 100)]
let polygon = Polygon(points)
{% endhighlight %}

## Example
{% highlight swift lineos %}
//create a 2 point array for the line
let linePts = [Point(0, 0), Point(100, 100)]
let line = Line(linePts)

//create a 3 point array for the triangle
let trianglePts = [Point(0, 100), Point(100, 100), Point(100, 0)]
let triangle = Triangle(trianglePts)

//create a 4 point array for the polygon
let polygonPts = [Point(0, 0), Point(100, 0), Point(100, 100), Point(0, 100)]
let polygon = Polygon(polygonPts)

//create an array between 10 and 20 points for the random shape
var points = [Point]()
for _ in 0..<random(min: 10, max: 20) {
    points.append(Point(random(below:100), random(below:100)))
}
let randomPolygon = Polygon(points)

//create a displacement vector
let dx = Vector(x: canvas.width/5.0, y: 0)

//position all the objects
line.center = Point(0, canvas.center.y) + dx
triangle.center = line.center + dx
polygon.center = triangle.center + dx
randomPolygon.center = polygon.center + dx

//add shapes to canvas
canvas.add(line)
canvas.add(triangle)
canvas.add(polygon)
canvas.add(randomPolygon)
{% endhighlight %}
