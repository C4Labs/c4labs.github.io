---
title: Text Shapes
description: Create text shapes using fonts and strings.
date:   2015-05-10 00:05:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-text/
image: poster.png
tags: [shapes, text, fonts]
author: Travis Kirton
---
![](text.png)

## Text Shapes
You can create a shape from a font and a string.

{% highlight swift lineos %}
let ts = TextShape(text:"C4", font: f)!
{% endhighlight %}

> TextShapes are optional, so you'll need to unwrap them to put them to use.

### Fonts
The easiest way to create a font is to pick a name from [iOSFonts.com](http://www.iosfonts.com), and specify a size:

{% highlight swift lineos %}
let f = Font(name: "Helvetica", size: 120)!
{% endhighlight %}

> Fonts are optional, so you'll need to unwrap them to put them to use.

## Example
{% highlight swift lineos %}
//create a font (120 is big enough for an iPad, make it smaller for iPod/iPhone)
let f = Font(name: "Helvetica", size: 240)!

//create a shape using a string and font
let textShape = TextShape(text:"C4", font: f)!
textShape.center = self.canvas.center

//add the shape to the canvas
canvas.add(textShape)
{% endhighlight %}
