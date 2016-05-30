---
title: Color Burn
description: Apply a color burn filter to an image.
date:   2016-06-02 00:02:00 -0700
layout: example
categories: examples, filters
permalink: /examples/filters-color-burn/
image: poster.png
tags: [filters]
author: Travis Kirton
---
![](color-burn.png)

## Color Burn
This example shows how you can apply a color burn filter to an image.

{% highlight swift lineos %}
let filter = ColorBurn()
//change filter settings
img.apply(filter)
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
