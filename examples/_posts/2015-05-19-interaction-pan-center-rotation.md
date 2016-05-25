---
title: Pan + Rotate a Shape
description: Update a shape's rotation property while panning.
date:   2015-05-08 23:59:59 -0800
layout: example
categories: examples, interaction

permalink: /examples/interaction-pan-center-rotation/
image: poster.png
tags: [interaction, pan, center, rotation]
author: Travis Kirton
---
![](pan-center-rotation.png)

## Center an Object on a Gesture
The easiest way to "drag" an object is to add a pan gesture to the canvas and have the object follow the pan.

{% highlight swift lineos %}
canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
    shape.center = center
}
{% endhighlight %}

> Note the use of `ShapeLayer.disableActions = true`? This makes sure that the changes to the objects following it are immediate, i.e. they won't animate.

## Example
{% highlight swift lineos %}
let shape = Rectangle(frame: Rect(0, 0, 240, 80))
shape.lineWidth = 40.0
canvas.add(shape)

canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
    ShapeLayer.disableActions = true
    shape.rotation = (self.canvas.center.x - center.x) / self.canvas.center.x * 2*M_PI
    shape.center = center
}
{% endhighlight %}
