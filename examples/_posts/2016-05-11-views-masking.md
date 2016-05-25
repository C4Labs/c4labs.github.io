---
title: Masking
description: Mask a view with any other view.
date:   2016-05-11 16:59:59 -0800
layout: example
categories: examples, views
permalink: /examples/views-masking/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](masking.png)

## Masking
You can use any visible object to mask a view.

{% highlight swift lineos %}
view.mask = shape
{% endhighlight %}

When doing so the masked view will be transparent wherever the mask is transparent. So, if you use a semi-transparent image, or a shape with opacity < 1.0, the masked object will also be slightly visible.

## Example
{% highlight swift lineos %}
let img = Image("chop")!
img.center = canvas.center
canvas.add(img)

img.mask = Circle(center: img.bounds.center, radius: img.height/2)
{% endhighlight %}
