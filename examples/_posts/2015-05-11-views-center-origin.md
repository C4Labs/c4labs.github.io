---
title: Positioning Views
description: Set the center and origin points to position your views.
date:   2015-05-11 00:00:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-center-origin/
image: poster.png
tags: [views, center, origin, point]
author: Travis Kirton
---
![](center-origin.png)

## Center & Origin
The easiest way to position objects is by setting their `origin` or `center` properties.

{% highlight swift lineos %}
view.center = Point()
shape.origin = Point()
{% endhighlight %}

> In C4, all visible objects are Views.

## Example
{% highlight swift lineos %}
let f = Rect(0, 0, 200, 200)

let r = Rectangle(frame: f)
canvas.add(r)

let e = Ellipse(frame: f)
e.fillColor = C4Pink
canvas.add(e)

let t = Triangle([Point(), Point(173,100), Point(0, 200)])
t.fillColor = C4Grey
canvas.add(t)

r.center = canvas.center
e.center = r.center
t.origin = e.center
{% endhighlight %}
