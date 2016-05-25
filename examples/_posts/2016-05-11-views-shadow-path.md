---
title: Shadow Path
description: Change the path / outline of a view's shadow.
date:   2016-05-11 13:59:59 -0800
layout: example
categories: examples, views
permalink: /examples/views-shadow-path/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](shadow-path.png)

## Shadow Path
By default, a view's shadow inherits a path that outlines its content. However, you can change the path of a shadow like this:

{% highlight swift lineos %}
view.shadow.path = shape.path
{% endhighlight %}

> Typically, you will create a shape object and use its path.

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: 100)
c.shadow.opacity = 0.4
c.shadow.radius = 3.0
c.shadow.offset = Size(130, 130)

let s = Star(center: Point(), pointCount: 40, innerRadius: 99, outerRadius: 105)
c.shadow.path = s.path

self.canvas.add(c)
{% endhighlight %}
