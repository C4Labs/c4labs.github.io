---
title: Background Color
description: Set the background color of any visible object.
date:   2016-05-11 22:59:59 -0800
layout: example
categories: examples
permalink: /examples/views-backgroundColor/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
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
