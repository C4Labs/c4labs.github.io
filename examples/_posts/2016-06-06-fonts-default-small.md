---
title: Default Fonts
description: Create a font, and change its size.
date:   2016-06-06 00:00:00 -0700
layout: example
categories: examples, fonts
permalink: /examples/fonts-default-small/
image: poster.png
tags: [fonts, text]
author: Travis Kirton
---
![](default-small.png)

## Default Font
You can create a `TextShape` without having to specify a `Font`. By default, the shape will create itself with the following metrics:

`AvenirNext-DemiBold`
`80pt`

So, to create a basic label you can do this:

{% highlight swift lineos %}
let label = TextShape("A Label")
{% endhighlight %}

Otherwise, you can create a font and apply it like this:

{% highlight swift lineos %}
let f = Font("Helvetica", size: 80)
let label = TextShape("A label", font: f)
{% endhighlight %}

## Example
{% highlight swift lineos %}
//create an initial font and a label
let label = TextShape(text: "Default Font")!
label.center = Point(canvas.center.x, canvas.height/3)

//use the initial font to create a new font with a bigger size
let f = Font(name: "Helvetica", size: 30.0)!
let smallLabel = TextShape(text: "Small Font", font: f)!
smallLabel.center = Point(canvas.center.x, canvas.height*2/3)

//add the labels to the canvas
self.canvas.add(label)
self.canvas.add(smallLabel)
{% endhighlight %}
