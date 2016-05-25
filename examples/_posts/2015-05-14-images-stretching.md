---
title: Stretching Images
description: Set the width, height or frame of an image.
date:   2015-05-14 23:59:59 -0800
layout: example
categories: examples, images
permalink: /examples/images-stretching/
image: poster.png
tags: [images]
author: Travis Kirton
---
![](stretching.png)

## Stretching Images
This example shows how you can stretch and set the size of an image.

### Width
You can set the `width` of an image like so:
{% highlight swift lineos %}
img.width = 100.0
{% endhighlight %}

### Height
You can set the `height` of an image like so: 

{% highlight swift lineos %}
img.height = 100.0
{% endhighlight %}

### Frame
You can set the `frame` of an image like so: 

{% highlight swift lineos %}
img.frame = canvas.frame
{% endhighlight %}

> If you set `constrainsProportions` to `true` then the image's scale will be preserved when setting `width` or `height`

## Example
{% highlight swift lineos %}
let normal = Image("rockies")!
normal.center = canvas.center

let tall = Image(c4image: normal)
tall.height = canvas.height
tall.center = canvas.center

let wide = Image(c4image: normal)
wide.width = canvas.width
wide.center = canvas.center

let full = Image(c4image: normal)
full.frame = canvas.frame
self.canvas.add(full)

let images = [normal, tall, wide, full]
for img in images {
    img.opacity = 0.66
    img.border.color = white
    img.border.width = 0.5
}

canvas.add(full)
canvas.add(tall)
canvas.add(wide)
canvas.add(normal)
{% endhighlight %}
