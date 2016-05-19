---
title: Random Color Tap
description: Use a tap to randomly change the color of objects.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-tap-object-random-color/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](tap-object-random-color.png)

## System Fonts

{% highlight swift lineos %}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dx = Vector(x: canvas.width/4, y: 0)

for i in -1...1 {
    let c = Circle(center: canvas.center + (dx * Double(i)), radius: canvas.height/6)
    c.lineWidth = 40.0
    c.addTapGestureRecognizer { locations, center, state in
        c.fillColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
        c.strokeColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
    }
    canvas.add(c)
}
{% endhighlight %}
