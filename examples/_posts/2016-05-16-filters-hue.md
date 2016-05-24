---
title: Hue
description: Apply a hue filter to an image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/filters-hue/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
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