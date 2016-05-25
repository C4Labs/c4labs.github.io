---
title: Creating Images
description: Create an image.
date:   2015-05-31 00:00:00 -0800
layout: example
categories: examples, images
permalink: /examples/images-create/
image: poster.png
tags: [images]
author: Travis Kirton
---
![](create.png)

## Creating Images
Included with the default installer are two images, `"chop"` and `"rockies"`, that you can expriment with:

![](defaultImages.png)

To create an image, simply specify the file name of the image like so:

{% highlight swift lineos %}
let img = Image("imageName")
{% endhighlight %}

> You don't have to specify the extension

## Example
{% highlight swift lineos %}
let img = Image("chop")!
img.constrainsProportions = true
img.width = canvas.width
canvas.add(img)
{% endhighlight %}
