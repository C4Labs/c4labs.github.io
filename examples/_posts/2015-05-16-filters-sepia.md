---
title: Sepia
description: Apply a sepia filter to an image.
date:   2015-05-15 23:59:59 -0800
layout: example
categories: examples, filters
permalink: /examples/filters-sepia/
image: poster.png
tags: [filters]
author: Travis Kirton
---
![](sepia.png)

## Sepia
This example shows how you can apply a sepia filter to an image.

{% highlight swift lineos %}
let filter = Sepia()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("chop")!
image.constrainsProportions = true
image.width = canvas.width
canvas.add(image)

var filter = Sepia()
filter.intensity = 5
image.apply(filter)
{% endhighlight %}
