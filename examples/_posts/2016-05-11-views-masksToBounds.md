---
title: Mask to Bounds
description: Clip visible contents if they fall outside a view's frame.
date:   2016-05-11 19:59:59 -0800
layout: example
categories: examples, views
permalink: /examples/views-masksToBounds/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](masksToBounds.png)

## Mask to Bounds
Particularly convenient when adding one view to another, setting the `masksToBounds` property will ensure that any visible contents outside of a view's frame will be clipped.

{% highlight swift lineos %}
view.masksToBounds = true
{% endhighlight %}

## Example
{% highlight swift lineos %}
let img = Image("chop")!
img.center = canvas.center
img.border.width = 10.0
img.border.color = C4Pink
canvas.add(img)
{% endhighlight %}
