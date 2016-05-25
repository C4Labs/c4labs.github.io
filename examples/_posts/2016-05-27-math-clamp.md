---
title: clamp()
description: How to apply the clamp() function.
date:   2016-05-27 23:59:59 -0800
layout: example
categories: examples, math
permalink: /examples/math-clamp/
image: poster.png
tags: [math, interaction]
author: Travis Kirton
---
![](clamp.png)

## clamp()
This example shows the effect of the `clamp()` function.

{% highlight swift lineos %}
let result = clamp(value)
{% endhighlight %}

> To run this example you need to include the [MathComparePaths.swift](https://gist.github.com/C4Framework/0705e9ad451fa2b655075ad72432ca46) file in your project.

## Example
{% highlight swift lineos %}
let example = MathComparePaths(frame: canvas.frame) {
    var points = [Point]()
    var modifiedPoints = [Point]()
    var x = 0.0
    repeat {
        let y = sin(x * 2 * M_PI) * -1 //-1 inverts iOS coordinates to look normal
        let my = clamp(y, min: -0.6, max: 0.6) // clamp value
        modifiedPoints.append(Point(x, my))
        points.append(Point(x, y))
        x += 0.001
    } while x < 1
    return (points, modifiedPoints)
}
canvas.add(example)
{% endhighlight %}
