---
title: Subviews
description: Add any view to any other view.
date:   2016-05-11 19:59:59 -0800
layout: example
categories: examples
permalink: /examples/views-subviews/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](subviews.png)

## Subviews
Seriously. You can add any view to any other view. And, by doing so the subview will inherit or be affected by the basic properties of its superview (like opacity, position, rotation, etc.)

{% highlight swift lineos %}
view.add(shape)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let circle = Circle(center: canvas.center, radius: 150)
canvas.add(circle)

let C4 = TextShape(text: "C4")!
C4.center = circle.bounds.center
circle.add(C4)
{% endhighlight %}