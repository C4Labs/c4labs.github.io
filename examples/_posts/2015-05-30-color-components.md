---
title: Color Components
description: Extract the values of a color.
date:   2015-05-30 23:59:59 -0800
layout: example
categories: examples, color
permalink: /examples/color-components/
image: poster.png
tags: [color]
author: Travis Kirton
---
![](components.png)

## Color Components
This example shows how to access the individual components of a `Color`.

{% highlight swift lineos %}
let r = color.red
{% endhighlight %}

> You can also access the `hue`, `saturation` and `brightness` values of a color.

## Example
{% highlight swift lineos %}
override func setup() {
    let dy = Vector(x: 0, y: canvas.height/5)

    var frame = Rect(Point(), Size(canvas.width * 0.9, canvas.height/6))
    frame.center = Point(canvas.center.x, dy.y)

    let blue = generateRect(frame, text: "C4Blue: \(C4Blue.red), \(C4Blue.green), \(C4Blue.blue), \(C4Blue.alpha)")
    canvas.add(blue)

    frame.center += dy
    let pink = generateRect(frame, text: "C4Pink: \(C4Pink.red), \(C4Pink.green), \(C4Pink.blue), \(C4Pink.alpha)")
    pink.fillColor = C4Pink

    frame.center += dy
    let purple = generateRect(frame, text: "C4Purple: \(C4Purple.red), \(C4Purple.green), \(C4Purple.blue), \(C4Purple.alpha)")
    purple.fillColor = C4Purple

    frame.center += dy
    let gray = generateRect(frame, text: "C4Grey: \(C4Grey.red), \(C4Grey.green), \(C4Grey.blue), \(C4Grey.alpha)")
    gray.fillColor = C4Grey
}

func generateRect(frame: Rect, text: String) -> Rectangle {
    let rect = Rectangle(frame: frame)
    canvas.add(rect)
    let label = TextShape(text: text, font: Font(name: "Helvetica", size: 20)!)!

    label.fillColor = text.hasPrefix("C4Grey") ? C4Purple : C4Grey

    label.center = rect.bounds.center
    rect.add(label)
    return rect
}
{% endhighlight %}
