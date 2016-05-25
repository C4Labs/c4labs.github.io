---
title: Sharpen
description: Apply a sharpen filter to an image.
date:   2016-05-16 23:59:59 -0800
layout: example
categories: examples, filters
permalink: /examples/filters-sharpen/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](Sharpen.png)

## Sepia
This example shows how you can apply a sharpen filter to an image.

{% highlight swift lineos %}
let filter = Sharpen()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("rockies")!
image.constrainsProportions = true
image.width = canvas.width
canvas.add(image)

var filter = Sharpen()
filter.sharpness = 15
image.apply(filter)
{% endhighlight %}
