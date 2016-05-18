---
title: Dot Screen
description: Apply a dot screen filter to an image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/filters-dot-screen/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
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
