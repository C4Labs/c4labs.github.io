---
title: Gaussian Blur
description: Apply a gaussian blur filter to an image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/filters-gaussian-blur/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
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
