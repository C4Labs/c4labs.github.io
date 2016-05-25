---
title: Pattern Colors
description: Create colors from pattern images.
date:   2016-05-13 23:59:59 -0800
layout: example
categories: examples, color
permalink: /examples/color-patterns/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](patterns.png)

## Pattern Colors
This example shows how to create colors from pattern images.

There are two images that come with the standard C4 installer, we will use them to stroke and fill a shape:

![](patternImages.png)

To create a color from any image, simply do this:

{% highlight swift lineos %}
let color = Color("pattern1")
{% endhighlight %}

## Example
{% highlight swift lineos %}
let f = Rect(0, 0, 200, 200)
let rect = Rectangle(frame: f)
rect.lineWidth = 50.0
rect.center = canvas.center
canvas.add(rect)

rect.strokeColor = Color("pattern1")
rect.fillColor = Color("pattern2")
{% endhighlight %}
