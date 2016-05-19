---
title: Pan + Velocity
description: Use a pan's velocity to change a shape's lineWidth.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-pan-velocity/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](pan-velocity.png)

## Velocity
You might see the `velocity` parameter in a gesture. This parameter is a representation of the speed of movement of the gesture between the current event and previous event. It is also measured by the change in the `center`.

{% highlight swift lineos %}
obj.addPanGestureRecognizer { locations, center, translation, velocity, state in
    print(velocity)
}
{% endhighlight %}

> Velocity can vary greatly, depending on how fast the user moves their touches. For example, it can range from 0...3000+, so you'll have to calibrate a bit like we do in the example below.

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: 100)
canvas.add(c)

canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
    c.center = center
    c.lineWidth = velocity.magnitude / 10.0
}
{% endhighlight %}
