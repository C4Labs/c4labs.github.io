---
title: Checkerboard
description: Generate a checkerboard image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples, filters
permalink: /examples/filters-checkerboard/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](checkerboard.png)

## Checkerboard
This example shows how you can generate a checkerboard pattern as an image.

{% highlight swift lineos %}
let filter = Checkerboard()
//change filter settings
img.generate(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("rockies")!
image.constrainsProportions = true
image.width = canvas.width
canvas.add(image)

var filter = ColorBurn()
filter.background = Image("rockies")!
image.apply(filter)
{% endhighlight %}
