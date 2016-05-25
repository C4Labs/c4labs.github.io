---
title: Shape Colors
description: Set the fill and stroke colors of a shape.
date:   2015-05-10 00:06:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-colors/
image: poster.png
tags: [shapes, fill, stroke]
author: Travis Kirton
---
![](colors.png)

## Fill & Stroke
You can change the fill and stroke colors by setting their respective properties:

{% highlight swift lineos %}
custom.fillColor = green
custom.strokeColor = magenta
{% endhighlight %}

The default colors for a shape are **fill:** `C4Blue` and **stroke:** `C4Purple`.

## Example
{% highlight swift lineos %}
//create a variable rect
var f = Rect(0, 0, 200, 200)

//position the frame, create the default shape
f.center = Point(canvas.width/3, canvas.center.y)
let shape = Ellipse(frame: f)

//position the frame, create the custom shape
f.center = Point(canvas.width*2/3, canvas.center.y)
let custom = Ellipse(frame: f)

//you can cast from a UIColor to a C4 Color
//set the fill and stroke colors for the custom shape
custom.fillColor = green
custom.strokeColor = magenta

//add the shapes to the canvas
canvas.add(shape)
canvas.add(custom)
{% endhighlight %}

> Did you see how we set the `center` of the `Rect`?
