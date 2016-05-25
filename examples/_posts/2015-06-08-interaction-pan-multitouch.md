---
title: Multitouch Pan
description: Deform a shape through a multitouch pan gesture.
date:   2015-06-08 00:05:00 -0800
layout: example
categories: examples, interaction
permalink: /examples/interaction-pan-multitouch/
image: poster.png
tags: [interaction, pan, multitouch]
author: Travis Kirton
---
![](pan-multitouch.png)

## Multitouch Pan
Pan gestures can easily register multiple touches. In this case, we're going to attach the gesture's touch points to the four corners of a shape. You can access the touch points of a gesture via its `locations` variable:

{% highlight swift lineos %}
obj.addPanGestureRecognizer { locations, center, translation, velocity, state in {
    for loc in locations {
        //do stuff
    }
}
{% endhighlight %}

### Center v. Locations
For a single-touch gestures (e.g. pan, longpress, etc.) there is no difference between `center` and `locations[0]`. However, for multiple touch gestures the `center` represents the geometric center (aka. centroid) of all the touches.

{% highlight swift lineos %}
obj.addPanGestureRecognizer { locations, center, translation, velocity, state in {
    if locations.count == 1 {
        //center == locations[0]
    } else {
        //center != locations[0]
    }
}
{% endhighlight %}

### Vector Tricks
We want a set of points equally distributed around the canvas' center. So, to do this we create two `Vector` objects that represent the displacement of `x`, and `y` respectively.

Then, with those displacement vectors we can calculate the points of our shape. Using this handy technique:

{% highlight swift lineos %}
Point - Vector = Point
{% endhighlight %}

For example: 

{% highlight swift lineos %}
let dx = Vector(x: 100, y: 0)
let point = canvas.center + dx
//point == Point(canvas.center.x + 100, canvas.center.y)
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
