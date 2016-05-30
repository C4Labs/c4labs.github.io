---
title: Stroke Start & End (Animated)
description: Animate the stroke start and end.
date:   2016-05-25 00:19:00 -0700
layout: example
categories: examples, shapes
permalink: /examples/shapes-stroke-start-end-animated/
image: poster.png
tags: [shapes, stroke, start, end, animation]
author: Travis Kirton
---
![](stroke-start-end-animated.png)

## Animating
You can animate start and end points used to draw the stroked outline of a shape. Simply wrap the property change in an animation block.

{% highlight swift lineos %}
ViewAnimation(duration: 1.0) {
    shape.strokeStart = 0.25
    shape.strokeEnd = 0.75
}.animate()
{% endhighlight %}

## Example
{% highlight swift lineos %}
override func setup() {
    //first shape will animate the start to the end
    let dx = Vector(x: canvas.width/4.0, y: 0)
    let start = createShape(canvas.center - dx, color: C4Blue)

    //second shape will animate the end to the start
    let end = createShape(canvas.center, color: C4Purple)

    //third shape will animate the start and end to a mid-point
    let both = createShape(canvas.center + dx, color: C4Pink)

    let a = ViewAnimation(duration:2.0) {
        start.strokeStart = 1
    }
    a.repeats = true
    a.autoreverses = true

    let b = ViewAnimation(duration:2.0) {
        end.strokeEnd = 0
    }
    b.repeats = true
    b.autoreverses = true

    let c = ViewAnimation(duration:2.0) {
        both.strokeStart = 0.5
        both.strokeEnd = 0.5
    }
    c.repeats = true
    c.autoreverses = true

    let grp = ViewAnimationGroup(animations: [a, b, c])
    grp.animate()
}

func createShape(center: Point, color: Color) -> Shape {
    let shape = Circle(center: center, radius: 50)
    shape.lineWidth = 30.0
    shape.strokeColor = color
    shape.fillColor = clear
    canvas.add(shape)
    return shape
}
{% endhighlight %}

![](){: data-id="CreepyKindDiplodocus" .gfyitem }