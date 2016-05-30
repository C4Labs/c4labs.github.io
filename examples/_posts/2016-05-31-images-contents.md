---
title: Image Contents
description: Change the entire contents of an image.
date:   2016-05-31 00:02:00 -0700
layout: example
categories: examples, images
permalink: /examples/images-contents/
image: poster.png
tags: [images]
author: Travis Kirton
---
![](contents.png)

## Image Contents
Say you want to toggle a few images in your app. Instead of hiding / revealing multiple images using the `hidden` property, you can create a extra "container" image whose contents you set.

{% highlight swift lineos %}
image.contents = anotherImage.contents
{% endhighlight %}

## Example
{% highlight swift lineos %}
let chop = Image("chop")!
let rockies = Image("rockies")!

let visibleImage = Image(c4image: chop)
visibleImage.constrainsProportions = true
visibleImage.width = canvas.width
canvas.add(visibleImage)

var isFirst = true
canvas.addTapGestureRecognizer { (center, location, state) -> () in
    if isFirst {
        visibleImage.contents = rockies.contents
    } else {
        visibleImage.contents = chop.contents
    }
    isFirst = !isFirst
}
{% endhighlight %}
