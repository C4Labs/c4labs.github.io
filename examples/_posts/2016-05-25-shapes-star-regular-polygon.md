---
title: Stars & Regular Polygons
description: Create stars and regular polygons.
date:   2016-05-25 00:02:00 -0700
layout: example
categories: examples, shapes
permalink: /examples/shapes-star-regular-polygon/
image: poster.png
tags: [shapes, star, regular polygon]
author: Travis Kirton
---
![](star-regular-polygon.png)

## Stars
Creating a star is a lot like creating a circle, the only difference is that you also specify variables for its inner and outer radius.

{% highlight swift lineos %}
let star = Star(center: canvas.center, pointCount: 5, innerRadius: 10, outerRadius: 20)
{% endhighlight %}

## Regular Polygons
Creating a regular-sided polygon is even easier... The major difference here is you specify the number of sides and the phase. 

The `phase` is it initial rotation of the shape... You can specify a value (in radians) if you want the shape's points to start in a different position.

{% highlight swift lineos %}
//defaults to 5 sides and 0 phase
let hexagon = RegularPolygon(center: canvas.center, radius: 90)
let pentagon = RegularPolygon(center: canvas.center, radius: 90, sides: 5, phase: M_PI_4)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dx = Vector(x: canvas.width/5, y: 0)
let star = Star(center: canvas.center-dx, pointCount: 20, innerRadius: 80, outerRadius: 100)
let hexagon = RegularPolygon(center: canvas.center + dx, radius: 90, sides: 6, phase: 0)
canvas.add(star)
canvas.add(hexagon)
{% endhighlight %}
