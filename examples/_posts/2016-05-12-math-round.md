---
title: round()
description: How to apply the round() function.
date:   2016-05-12 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/math-round/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](round.png)

## round()
This example shows the effect of the `round()` function.

{% highlight swift lineos %}
let result = round(value)
{% endhighlight %}

> To run this example you need to include the [MathComparePaths.swift](https://gist.github.com/C4Framework/0705e9ad451fa2b655075ad72432ca46) file in your project.

## Example
{% highlight swift lineos %}
let example = MathComparePaths(frame: canvas.frame) {
    var points = [Point]()
    var modifiedPoints = [Point]()
    var x = 0.0
    repeat {
        let y = sin(x * 2 * M_PI) * -1
        let mappedY = round(y)
        modifiedPoints.append(Point(x, mappedY))
        points.append(Point(x, y))
        x += 0.001
    } while x < 1
    return (points, modifiedPoints)
}
canvas.add(example)
{% endhighlight %}
