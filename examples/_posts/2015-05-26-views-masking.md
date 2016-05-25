---
title: Masking
description: Mask a view with any other view.
date:   2015-05-26 00:08:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-masking/
image: poster.png
tags: [views, masking]
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
