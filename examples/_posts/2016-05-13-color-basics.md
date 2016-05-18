---
title: Color Basics
description: Intro to creating colors.
date:   2016-05-13 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/color-basics/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](basics.png)

## Color basics
Here's how to create colors in 8 different ways. 

By default, C4 shapes will use `C4Blue` for fill and `C4Purple` for stroke, which is why the following method doesn't set anything.

{% highlight swift lineos %}
func defaultColors(frame: Rect) {
    generateRect(frame, text: "Default")
}
{% endhighlight %}

> For more on each technique, check out the other color examples.

## Example
{% highlight swift lineos %}
override func setup() {
    let size = Size(canvas.width/4, canvas.height/2)

    let dx = Vector(x: size.width, y: 0)
    let dy = Vector(x: -canvas.width, y: size.height)

    var origin = Point()

    for i in 0..<8 {
        switch i {
        case 1:
            c4Colors(Rect(origin, size))
        case 2:
            presetColors(Rect(origin, size))
        case 3:
            rgbColors(Rect(origin, size))
        case 4:
            hsbColors(Rect(origin, size))
        case 5:
            patternColors(Rect(origin, size))
        case 6:
            alphaColors(Rect(origin, size))
        case 7:
            hexColors(Rect(origin, size))
        default:
            defaultColors(Rect(origin, size))
        }

        origin += dx
        if origin.x >= canvas.width {
            origin += dy
        }
    }
}

func defaultColors(frame: Rect) {
    generateRect(frame, text: "Default")
}

func c4Colors(frame: Rect) {
    let shape = generateRect(frame, text: "C4")
    shape.fillColor = C4Pink
    shape.strokeColor = C4Grey
}

func presetColors(frame: Rect) {
    let shape = generateRect(frame, text: "Presets")
    shape.fillColor = darkGray
    shape.strokeColor = orange
}

func rgbColors(frame: Rect) {
    let shape = generateRect(frame, text: "RGB")
    shape.fillColor = Color(red: 0.75, green:0.0, blue:0.0, alpha:1.0) //half red
    shape.strokeColor = Color(red: 0.50, green:1.0, blue:0.0, alpha:1.0) //lime
}

func hsbColors(frame: Rect) {
    let shape = generateRect(frame, text: "HSB")
    shape.fillColor = Color(hue: 0.25, saturation: 0.75, brightness: 0.5, alpha: 1.0)
    shape.strokeColor = Color(hue: 0.5, saturation: 1.0, brightness: 1.0, alpha: 1.0)
}

func patternColors(frame: Rect) {
    let shape = generateRect(frame, text: "Patterns")
    shape.fillColor = Color("pattern2")
    shape.strokeColor = Color("pattern1")
}

func alphaColors(frame: Rect) {
    let shape = generateRect(frame, text: "Alpha")
    shape.fillColor = shape.fillColor?.colorWithAlpha(0.5)
    shape.strokeColor = shape.strokeColor?.colorWithAlpha(0.5)
}

func hexColors(frame: Rect) {
    let shape = generateRect(frame, text: "Hex")
    shape.fillColor = Color(0xFF0000FF)
    shape.strokeColor = Color(0xFF0012FF)
}

func generateRect(frame: Rect, text: String) -> Rectangle {
    let rect = Rectangle(frame: frame)
    rect.corner = Size()
    rect.lineWidth = 10.0
    rect.masksToBounds = true
    canvas.add(rect)
    let label = TextShape(text: text, font: Font(name: "Helvetica", size: 20)!)!
    label.fillColor = white
    label.center = rect.bounds.center
    rect.add(label)
    return rect
}
{% endhighlight %}
