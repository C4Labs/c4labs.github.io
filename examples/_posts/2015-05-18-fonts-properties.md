---
title: Properties
description: Check out all properties available to a specific font.
date:   2015-05-12 23:59:59 -0800
layout: example
categories: examples, fonts
permalink: /examples/fonts-properties/
image: poster.png
tags: [fonts, text]
author: Travis Kirton
---
![](properties.png)

## Font Properties
There are a number of properties that you can access on a `Font` object. Typically, you will use these to do some custom layout. Here is the list:

{% highlight swift lineos %}
.familyName
.fontName
.pointSize
.ascender
.descender
.capHeight
.xHeight
.lineHeight
{% endhighlight %}

You can access them like this:
{% highlight swift lineos %}
let f = Font()
f.familyName
//etc...
{% endhighlight %}

### Resizing a Font
If you want a font with a smaller point size, you can use the `font(size:)` method, like this:

{% highlight swift lineos %}
let f = Font("AvenirNext-DemiBold", size: 80)
let smallFont = f.font(30)
{% endhighlight %}

## Example
{% highlight swift lineos %}
override func setup() {
    //create an initial font
    var f = Font(name:"BodoniSvtyTwoITCTT-Book", size:45.0)!

    //create an initial label, position it, add it to the canvas
    var p = Point(canvas.center.x, f.lineHeight)

    createTextShape("Font Properties", font: f, center: &p)

    //change the font size
    f = f.font(30.0)

    createTextShape("Family name: \(f.familyName)", font: f, center: &p)
    createTextShape("Font name: \(f.fontName)", font: f, center: &p)
    createTextShape(String(format:"Point size: %.2f", f.pointSize), font: f, center: &p)
    createTextShape(String(format:"Ascender: %.2f", f.ascender), font: f, center: &p)
    createTextShape(String(format:"Descender: %.2f", f.descender), font: f, center: &p)
    createTextShape(String(format:"Cap Height: %.2f", f.capHeight), font: f, center: &p)
    createTextShape(String(format:"X-Height: %.2f", f.xHeight), font: f, center: &p)
    createTextShape(String(format:"Line Height: %.2f", f.lineHeight), font: f, center: &p)
}

func createTextShape(text: String, font: Font, inout center: Point) {
    let ts = TextShape(text: text, font: font)!
    ts.center = center
    canvas.add(ts)
    center += Vector(x: 0, y: ts.height + 10)
}
{% endhighlight %}
