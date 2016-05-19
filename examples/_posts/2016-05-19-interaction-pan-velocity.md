---
title: Pan + Velocity
description: Use a pan gesture's velocity to change a shape's lineWidth.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-pan-velocity/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](pan-velocity.png)

## System Fonts

{% highlight swift lineos %}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: 100)
canvas.add(c)

canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
    c.center = center
    c.lineWidth = velocity.magnitude / 10.0
}
{% endhighlight %}
