---
title: Bloom
description: Apply a bloom filter to an image.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/filters-bloom/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](bloom.png)

## Bloom
This example shows how you can apply a bloom filter to an image.

{% highlight swift lineos %}
let filter = Bloom()
//change filter settings
img.apply(filter)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let image = Image("chop")!
image.constrainsProportions = true
//Bloom reduces the size of the image, so we adjust to fill the canvas
image.width = canvas.width + 140
image.center = canvas.center
canvas.add(image)

let filter = Bloom()
image.apply(filter)
{% endhighlight %}
