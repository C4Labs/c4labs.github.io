---
title: Hue
description: Apply a hue filter to an image.
date:   2015-05-16 00:05:00 -0800
layout: example
categories: examples, filters
permalink: /examples/filters-hue/
image: poster.png
tags: [filters]
author: Travis Kirton
---
![](hue.png)

## Bloom
This example shows how you can apply a hue filter to an image.

{% highlight swift lineos %}
let filter = Hue()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("rockies")!
image.constrainsProportions = true
image.width = canvas.width
image.center = canvas.center
canvas.add(image)

var filter = Hue()
filter.angle = M_PI
image.apply(filter)
{% endhighlight %}
