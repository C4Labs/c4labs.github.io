---
title: Gaussian Blur
description: Apply a gaussian blur filter to an image.
date:   2016-06-02 00:04:00 -0700
layout: example
categories: examples, filters
permalink: /examples/filters-gaussian-blur/
image: poster.png
tags: [filters]
author: Travis Kirton
---
![](gaussian-blur.png)

## Gaussian Blur
This example shows how you can apply a gaussian blur filter to an image.

{% highlight swift lineos %}
let filter = GaussianBlur()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("chop")!
image.constrainsProportions = true
//GaussianBlur reduces the size of the image, so we adjust to fill the canvas
image.width = canvas.width + 120
image.center = canvas.center
canvas.add(image)

var filter = GaussianBlur()
filter.radius = 5
image.apply(filter)
{% endhighlight %}
