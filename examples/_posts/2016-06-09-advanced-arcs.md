---
title: Arcs
description: Continuous end-to-end drawing of arcs. 
date:   2016-06-09 00:00:00 -0800
layout: example
categories: examples, advanced
permalink: /examples/advanced-arcs/
image: poster.png
tags: [advanced, timers, arcs]
author: Travis Kirton
---
![](arcs.png)

## Arcs
The goal of this example is to create a dynamic random animation of linked arcs. 

A few techniques to note here are:

* Dynamic use of tuples to set up the initial conditions for drawing arcs
* Calculating a dynamic mid-point using the `lerp` function
* Ternary operators `let a = x ? y : z` to set the drawing characteristics of arcs
* Disabling / Enabling actions to temporarily suspend animations
* Completion observers to continuously trigger new animations

## Example
{% highlight swift lineos %}
var pts = (Point(), Point())
var canvasShapeCount = 0

override func setup() {
    //set up initial points
    pts = (canvas.center, canvas.center)
    createArc()
}

func createArc() {
    //preserve end-point, shift it to begging point
    pts.0 = pts.1
    //create random end point
    pts.1 = Point(random01()*self.canvas.width, self.canvas.center.y)

    //figure out if the shape should draw upwards or downwards
    let up = canvasShapeCount % 2 == 0 ? true : false

    //create an arc
    let arc = self.arcBetween(pts, upwards: up)
    canvas.add(arc)
    canvasShapeCount += 1

    //animate the arc to appear
    let a = ViewAnimation(duration:1.0) {
        if arc.strokeStart == 1.0 {
            arc.strokeStart = 0.0
        } else {
            arc.strokeEnd = 1.0
        }
    }
    //create another arc when the animation completes
    a.addCompletionObserver {
        self.createArc()
    }
    a.animate()
}

func arcBetween(points: (Point, Point), upwards: Bool) -> Arc {
    //we want to create and style without triggering an animation
    ShapeLayer.disableActions = true

    //create the arc, using ternary operators to determine characteristics
    //set the start/end angles based on whether it is up or down
    let s = Arc(center: lerp(points.0, points.1, at: 0.5),
                radius: distance(points.0, rhs: points.1)/2,
                start: upwards ? M_PI : 0,
                end: upwards ? 2 * M_PI : M_PI,
                clockwise: true)
    s.fillColor = clear

    //set the stroke end/start points
    //depending on drawing left || right
    //depending on drawing up || down
    if points.1.x > points.0.x {
        if upwards {
            s.strokeEnd = 0.0
        } else {
            s.strokeStart = 1.0
        }
    } else {
        if upwards {
            s.strokeStart = 1.0
        } else {
            s.strokeEnd = 0.0
        }
    }

    //color it pink if it's drawing upwards
    if upwards {
        s.strokeColor = C4Pink
    }
    ShapeLayer.disableActions = false

    return s
}
{% endhighlight %}
