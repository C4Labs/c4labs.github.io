---
title: Shadows
description: All views have a shadow.
date:   2016-05-26 00:17:00 -0700
layout: example
categories: examples, views
permalink: /examples/views-shadow/
image: poster.png
tags: [views, shadow]
author: Travis Kirton
---
![](shadow.png)

## Shadows
Every view has a shadow, which by default is invisible. To reveal and style the border you can set the following properties.

{% highlight swift lineos %}
opacity
offset
radius
color
{% endhighlight %}

The shadow itself is actually a property, so you set the above like this:

{% highlight swift lineos %}
view.shadow.radius = 10.0
{% endhighlight %}

You can even copy an entire shadow between views:

{% highlight swift lineos %}
shape.shadow = view.shadow
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dx = Vector(x: canvas.width/4, y: 0)

let c1 = Circle(center: canvas.center - dx, radius: 66)
let c2 = Circle(center: canvas.center, radius: 66)
let c3 = Circle(center: canvas.center + dx, radius: 66)

c1.shadow.opacity = 0.8
c2.shadow.opacity = 0.8
c3.shadow.opacity = 0.8

c1.shadow.offset = Size(10, 10)
c2.shadow.offset = Size(16, 20)
c3.shadow.offset = Size(22, 28)

c1.shadow.radius = 3.0
c2.shadow.radius = 6.0
c3.shadow.radius = 9.0

c2.shadow.color = C4Pink
c3.shadow.color = C4Blue

canvas.add(c1)
canvas.add(c2)
canvas.add(c3)
{% endhighlight %}
