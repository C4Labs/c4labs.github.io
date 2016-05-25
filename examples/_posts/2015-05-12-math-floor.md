---
title: floor()
description: How to apply the floor() function.
date:   2015-05-12 23:59:59 -0800
layout: example
categories: examples, math
permalink: /examples/math-floor/
image: poster.png
tags: [math, interaction]
author: Travis Kirton
---
![](floor.png)

## floor()
This example shows the effect of the `floor()` function.

{% highlight swift lineos %}
let result = floor(value)
{% endhighlight %}

> To run this example you need to include the [MathComparePaths.swift](https://gist.github.com/C4Framework/0705e9ad451fa2b655075ad72432ca46) file in your project.

## Example
{% highlight swift lineos %}
let example = MathComparePaths(frame: canvas.frame) {
    var points = [Point]()
    var modifiedPoints = [Point]()
    var x = 0.0
    repeat {
        let y = sin(x * 2 * M_PI) * -1//-1 inverts iOS coordinates to look normal
        let my = floor(sin(x * 2 * M_PI)) * -1 //same as above
        modifiedPoints.append(Point(x, my))
        points.append(Point(x, y))
        x += 0.001
    } while x < 1
    return (points, modifiedPoints)
}
canvas.add(example)
{% endhighlight %}
