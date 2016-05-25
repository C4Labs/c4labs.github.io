---
title: Pan + Line End Points
description: Remove, add and update a line's endPoint while panning.
date:   2016-06-08 00:02:00 -0800
layout: example
categories: examples, interaction

permalink: /examples/interaction-pan-line-endPoint/
image: poster.png
tags: [interaction, line, end, point]
author: Travis Kirton
---
![](pan-line-endPoint.png)

## Dynamic Line End Points
You can change the end points of a line. Here's how to attach one to a pan gesture, and then toggle it's visibility depending on the state of the gesture.

> This example uses `if-else` instead of `switch`, just because we can.

## Example
{% highlight swift lineos %}
let line = Line((Point(), Point()))
line.endPoints.0 = canvas.center
line.lineWidth = 40.0
canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
    line.endPoints.1 = center
    if state == .Began {
        self.canvas.add(line)
    } else if state == .Ended {
        self.canvas.remove(line)
    }
}
{% endhighlight %}
