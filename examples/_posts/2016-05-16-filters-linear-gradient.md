---
title: Linear Gradient
description: Generate a linear gradient image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/filters-linear-gradient/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](linear-gradient.png)

## Linear Gradient
This example shows how you can generate a linear gradient as an image.

{% highlight swift lineos %}
let filter = LinearGradient()
//change filter settings
img.generate(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image(frame: canvas.frame)
canvas.add(image)

var filter = LinearGradient()
filter.colors = [C4Pink, C4Blue]
filter.points = [Point(), canvas.center]
image.generate(filter)
{% endhighlight %}
