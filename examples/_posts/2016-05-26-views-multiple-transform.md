---
title: Multiple Transforms
description: Transform while you transform.
date:   2016-05-26 00:16:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-multiple-transform/
image: poster.png
tags: [views, transform]
author: Travis Kirton
---
![](multiple-transform.png)

## Adding Transforms Together
Before applying a transform to a view, you can append other transforms to it.

{% highlight swift lineos %}
var t = Transform.makeScale(2, 2)
t.rotate(M_PI)
t.translate(Vector(10,10))
view.transform = t
{% endhighlight %}

## Example
{% highlight swift lineos %}
let img = Image("chop")!
canvas.add(img)

let dw = canvas.width/img.width
let dxdy = (Vector(img.center) - Vector(canvas.center))/dw
var scaleRotateTranslate = Transform.makeScale(dw, dw)
scaleRotateTranslate.rotate(M_PI)
scaleRotateTranslate.translate(dxdy)

let a = ViewAnimation(duration: 1.0) {
    img.transform = scaleRotateTranslate
}
a.delay = 1.0
a.animate()
{% endhighlight %}
