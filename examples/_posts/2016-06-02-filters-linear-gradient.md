---
title: Linear Gradient
description: Generate a linear gradient image.
date:   2016-06-02 00:06:00 -0800
layout: example
categories: examples, filters
permalink: /examples/filters-linear-gradient/
image: poster.png
tags: [filters]
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
