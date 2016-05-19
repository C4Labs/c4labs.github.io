---
title: Multitouch Pan
description: Deform a shape through a multitouch pan gesture.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-pan-multitouch/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](pan-multitouch.png)

## System Fonts

{% highlight swift lineos %}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dx = Vector(x: 100, y: 0)
let dy = Vector(x: 0, y: 100)

let c = canvas.center

let defaultPoints: [Point] = [
    ((c - dx) - dy),
    c - dy,
    (c + dx) - dy,
    c + dx,
    (c + dx) + dy,
    c + dy,
    (c - dx) + dy,
    c - dx]

var polyPoints = defaultPoints

let poly = Polygon(polyPoints)
poly.interactionEnabled = false
poly.close()
poly.lineWidth = 20.0
canvas.add(poly)

let pan = canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
    polyPoints = defaultPoints
    for i in 0..<locations.count {
        polyPoints[i * 2] = locations[i]
    }
    poly.points = polyPoints
    poly.close()
}

pan.maximumNumberOfTouches = 4
{% endhighlight %}
