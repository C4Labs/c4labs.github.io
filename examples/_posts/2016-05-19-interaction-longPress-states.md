---
title: State Switching
description: Use a long press gesture's state to update a shape's color.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-longPress-states/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](longPress-states.png)

## State Switching

{% highlight swift lineos %}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: canvas.height/3)
c.lineWidth = 40.0
let press = c.addLongPressGestureRecognizer { locations, center, state in
    switch state {
    case .Began, .Changed:
        c.fillColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
        c.strokeColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
    default:
        c.fillColor = C4Blue
        c.strokeColor = C4Purple
    }
}
press.minimumPressDuration = 0.0
canvas.add(c)
{% endhighlight %}
