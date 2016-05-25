---
title: Twirl
description: Apply a twirl filter to an image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples, filters
permalink: /examples/filters-twirl/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](twirl.png)

## Twirl
This example shows how you can apply a twirl filter to an image.

{% highlight swift lineos %}
let filter = Twirl()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("chop")!
image.constrainsProportions = true
image.width = canvas.width
image.center = canvas.center
canvas.add(image)

var filter = Twirl()
filter.center = Point(0.5, 0.5)
filter.angle = 2*M_PI
filter.radius = 200
image.apply(filter)
{% endhighlight %}
