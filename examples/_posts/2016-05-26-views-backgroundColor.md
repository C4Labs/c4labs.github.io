---
title: Background Color
description: Set the background color of any visible object.
date:   2016-05-26 00:03:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-backgroundColor/
image: poster.png
tags: [views, background, color]
author: Travis Kirton
---
![](backgroundColor.png)

## Background Color
You can set the background color for any view... Even images (whose content fills the frame).

{% highlight swift lineos %}
view.backgroundColor = red
{% endhighlight %}

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: 150)
c.backgroundColor = C4Pink
canvas.add(c)
{% endhighlight %}