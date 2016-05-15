---
title: Line Width
description: How to change the thickness of a shape's line.
date:   2016-05-10 18:59:59 -0800
layout: example
categories: examples
permalink: /examples/shapes-lineWidth/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](lineWidth.png)

## Line Width
You can change the `lineWidth` of a shape by setting its respective property:

{% highlight swift lineos %}
shape.lineWidth = 40.0
{% endhighlight %}

The default width of a line is `1.0`.

## Example
{% highlight swift lineos %}
//create a circle
let circle = Circle(center: canvas.center, radius: 100)

//change the line width
circle.lineWidth = 40

//add it to the canvas
canvas.add(circle)
{% endhighlight %}