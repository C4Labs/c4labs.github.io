---
title: Animated Subview Masking
description: Add a subview to an animated mask... Even more lovely.
date:   2016-05-26 00:10:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-masking-animated-subviews/
image: poster.png
tags: [views, masking, subviews, animation]
author: Travis Kirton
---
![](masking-animated-subviews.png)

## Animated Subview Masking
If you add a subview to a mask the two objects will combine into a supermask.

{% highlight swift lineos %}
ViewAnimation(duration: 0.25) {
    mask.add(shape)
    mask.rotation = M_PI
}.animate()
{% endhighlight %}

## Example
{% highlight swift lineos %}
let img = Image("chop")!
img.constrainsProportions = true
img.height = canvas.height
img.center = canvas.center
canvas.add(img)

let mask = Rectangle(frame: Rect(0, 0, img.height-20, 50))
let submask = Rectangle(frame: Rect(0, 0, 50, img.height-20))
submask.center = mask.center
mask.add(submask)
mask.center = img.bounds.center
img.mask = mask

let a = ViewAnimation(duration: 17) {
    mask.transform.rotate(-M_PI)
}
let b = ViewAnimation(duration: 23) {
    submask.transform.rotate(M_PI_2)
}
a.repeats = true
b.repeats = true
b.autoreverses = true

a.animate()
b.animate()
{% endhighlight %}
