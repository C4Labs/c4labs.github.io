---
title: Dot Screen
description: Apply a dot screen filter to an image.
date:   2016-05-31 00:03:00 -0700
layout: example
categories: examples, filters
permalink: /examples/filters-dot-screen/
image: poster.png
tags: [filters]
author: Travis Kirton
---
![](dot-screen.png)

## Dot Screen
This example shows how you can apply a dot screen filter to an image.

{% highlight swift lineos %}
let filter = DotScreen()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("chop")!
image.constrainsProportions = true
image.width = canvas.width
canvas.add(image)

var filter = DotScreen()
filter.center = canvas.center
filter.width = 5
filter.sharpness = 100
image.apply(filter)
{% endhighlight %}
