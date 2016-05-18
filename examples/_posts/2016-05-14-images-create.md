---
title: Creating Images
description: Creat an image.
date:   2016-05-14 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/images-create/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
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
