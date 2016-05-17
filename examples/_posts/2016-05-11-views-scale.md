---
title: Scale
description: Scale a view.
date:   2016-05-11 12:59:59 -0800
layout: example
categories: examples
permalink: /examples/views-scale/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](scale.png)

## Scaling
You can scale a view by creating a `Transform` and setting it to the view's property:

{% highlight swift lineos %}
view.transform = Transform.makeScale()
{% endhighlight %}

> A scaled object will scale its visible properties, in this example the `lineWidth` on the second circle is twice as big as the original.

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: 75)
c.lineWidth = 15.0

let scale = Transform.makeScale(2.0, 2.0)

let c2 = Circle(center: c.center, radius: 75)
c2.lineWidth = c.lineWidth

c2.transform = scale
c2.center = canvas.center

canvas.add(c2)
canvas.add(c)
{% endhighlight %}
