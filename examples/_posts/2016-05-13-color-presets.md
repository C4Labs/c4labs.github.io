---
title: Preset Colors
description: How to use fifteen preset colors.
date:   2016-05-13 23:59:59 -0800
layout: example
categories: examples, color
permalink: /examples/color-presets/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](presets.png)

## Preset Colors
There are fifteen preset colors you can call on. These colors map to the same values as the presets in `UIKit`.

For example, in C4 you can use the `red` variable insted of `UIColor.redColor`.

{% highlight swift lineos %}
let color = red
{% endhighlight %}

> Check out the use of `fallthrough` and how to have multiple values for a `switch` case.

## Example
{% highlight swift lineos %}
//we use an array of shapes and for() loops to set styles
let colors = [black, darkGray, lightGray, gray, red, green, blue,
              cyan, yellow, magenta, orange, purple, brown, white, clear]
let labels = ["black", "darkGray", "lightGray", "gray", "red", "green", "blue",
              "cyan", "yellow", "magenta", "orange", "purple", "brown", "white", "clear"]

//create a frame for building each shape
let frame = Rect(0, 0, self.canvas.width*0.96, self.canvas.height/18.0)

//create a point that we can update to se the position of each object
let dy = Vector(x: 0, y: canvas.height/16)
var center = Point(canvas.center.x, dy.y)

let f = Font(name: "Helvetica", size: 16.0)!
//for every shape, update its linewidth, position and add it to the canvas
for i in 0..<15 {
    let shape = Rectangle(frame: frame)
    shape.fillColor = colors[i]
    shape.center = center
    canvas.add(shape)

    let label = TextShape(text: labels[i], font: f)!

    //all labels will be white except white, clear, yellow, green and cyan
    switch labels[i] {
    case "yellow", "green", "cyan":
        shape.lineWidth = 0.0
        fallthrough
    case "white", "clear", "yellow", "green", "cyan":
        label.fillColor = C4Purple
    default:
        label.fillColor = white
        shape.lineWidth = 0.0
    }

    label.center = shape.bounds.center
    shape.add(label)

    center += dy
}
{% endhighlight %}
