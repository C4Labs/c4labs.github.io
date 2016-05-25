---
title: Rotation
description: Rotate a view more than 180°.
date:   2015-05-11 09:59:59 -0800
layout: example
categories: examples, views
permalink: /examples/views-rotation/
image: poster.png
tags: [views, anchor, point]
author: Travis Kirton
---
![](rotation.png)

## Rotation
When you want to rotate something more than `+/- M_PI (180°)` you can use the `rotation` property instead of applying a transform to a view.

{% highlight swift lineos %}
view.rotation = 1.75 * M_PI
{% endhighlight %}

## Example
{% highlight swift lineos %}
let r = Rectangle(frame: Rect(0, 0, 200, 200))
r.lineWidth = 15.0

let c = Circle(center: Point(), radius: 25)
c.lineWidth = 5.0

r.add(c)

r.center = canvas.center

canvas.add(r)

let a = ViewAnimation(duration: 1.0) {
    r.rotation = 1.75 * M_PI
}
a.delay = 0.5
a.animate()
{% endhighlight %}
