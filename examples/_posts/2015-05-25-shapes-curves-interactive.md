---
title: Interactive Curves
description: Update curve control points using gestures.
date:   2015-05-25 00:12:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-curves-interactive/
image: poster.png
tags: [shapes, curves, interaction]
author: Travis Kirton
---
![](curves-interactive.png)

## Interactive Curves
Here's how to attach a few gesture recognizers to some shapes and then connect their movement to the control points of a couple curves.

## Example
{% highlight swift lineos %}
var a, b, c: UIPanGestureRecognizer!

override func setup() {
    var points = (Point(canvas.width/4, canvas.height/3), Point(canvas.width*3/4, canvas.height/3))
    let bezier = Curve(begin: points.0, control0: points.0, control1: points.1, end: points.1)
    canvas.add(bezier)

    let cA = Circle(center: points.0, radius: 22)
    let cB = Circle(center: points.1, radius: 22)
    cB.fillColor = C4Pink

    points.0.y *= 2.0
    points.1.y *= 2.0
    let quad = QuadCurve(begin: points.0, control: lerp(points.0, points.1, at: 0.5), end: points.1)

    canvas.add(quad)
    let cC = Circle(center: quad.controlPoint, radius: 22)
    cC.fillColor = C4Purple

    canvas.add(cA)
    canvas.add(cB)
    canvas.add(cC)

    a = cA.addPanGestureRecognizer { locations, center, translation, velocity, state in
        cA.center += translation
        bezier.controlPoints.0 = cA.center
        self.a.setTranslation(CGPoint(), inView: self.canvas.view)
    }

    b = cB.addPanGestureRecognizer { locations, center, translation, velocity, state in
        cB.center += translation
        bezier.controlPoints.1 = cB.center
        self.b.setTranslation(CGPoint(), inView: self.canvas.view)
    }

    c = cC.addPanGestureRecognizer { locations, center, translation, velocity, state in
        cC.center += translation
        quad.controlPoint = cC.center
        self.c.setTranslation(CGPoint(), inView: self.canvas.view)
    }
}
{% endhighlight %}

![](){: data-id="LinearSphericalEquine" .gfyitem }