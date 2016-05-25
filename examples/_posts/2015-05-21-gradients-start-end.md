---
title: Gradient Points
description: Change the start and end points of a gradient.
date:   2015-05-06 23:59:59 -0800
layout: example
categories: examples, advanced
permalink: /examples/gradients-start-end/
image: poster.png
tags: [gradients]
author: Travis Kirton
---
![](start-end.png)

## Start and End Points
Each gradient has two points between which the gradient will draw. By default these values are:

{% highlight swift lineos %}
start = Point(0, 0)
end = Point(0, 1)
{% endhighlight %}

These two points tell the gradient to draw from top to bottom (i.e. the `y` value changes from `0` to `1`).

You can change these points by specifying new variables, like this:

{% highlight swift lineos %}
gradient.startPoint = Point(0, 1)
gradient.endPoint = Point(0, 0)
{% endhighlight %}

## Example
{% highlight swift lineos %}
var f = canvas.frame
f.width /= 2

let g1 = Gradient(frame: f)
g1.startPoint = Point(0, 0)
g1.endPoint = Point(1, 1)
canvas.add(g1)

f.origin.x += canvas.center.x
let g2 = Gradient(frame: f)
g2.startPoint = Point(1, 0)
g2.endPoint = Point(0, 1)
canvas.add(g2)
{% endhighlight %}
