---
title: Pan + Rotate a Shape
description: Update a shape's rotation property while panning.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-pan-center-rotation/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](pan-center-rotation.png)

## System Fonts

{% highlight swift lineos %}
{% endhighlight %}

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
