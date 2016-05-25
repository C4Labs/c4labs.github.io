---
title: Animated Masking
description: Animate a view's mask... So lovely.
date:   2016-05-26 00:09:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-masking-animated/
image: poster.png
tags: [views, masking, animation]
author: Travis Kirton
---
![](masking-animated.png)

## Animated Masking
You can animate a view's mask by wrapping its property changs in an animation block.

{% highlight swift lineos %}
ViewAnimation(duration: 0.25) {
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
mask.center = img.bounds.center
img.mask = mask

let a = ViewAnimation(duration: 1.5) {
    mask.transform.rotate(M_PI)
}
a.repeats = true
a.animate()
{% endhighlight %}
