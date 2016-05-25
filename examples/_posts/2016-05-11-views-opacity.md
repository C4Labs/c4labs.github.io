---
title: Opacity
description: Set the opacity of a view.
date:   2016-05-11 20:59:59 -0800
layout: example
categories: examples, views
permalink: /examples/views-opacity/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](opacity.png)

## Opacity
Easily change the opacity of a view (and all it's subviews) by setting it's associated property:

{% highlight swift lineos %}
view.opacity = 0.5
{% endhighlight %}

## Example
{% highlight swift lineos %}
var origin = Point()
let size = Size(canvas.width/10, canvas.height)
let dx = Vector(x: size.width, y: 0)
repeat {
    let r = Rectangle(frame: Rect(origin, size))
    r.opacity = origin.x/canvas.width
    canvas.add(r)
    origin += dx
} while origin.x < canvas.width
{% endhighlight %}
