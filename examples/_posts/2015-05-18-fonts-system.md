---
title: System Fonts
description: Here's how you can use iOS system fonts.
date:   2015-05-12 23:59:59 -0800
layout: example
categories: examples, fonts
permalink: /examples/fonts-system/
image: poster.png
tags: [fonts, text]
author: Travis Kirton
---
![](system.png)

## System Fonts
There are 3 system fonts that you can easily create by simply specifying a size.

{% highlight swift lineos %}
Font.systemFont(30.0)
Font.boldSystemFont(30.0)
Font.italicSystemFont(30.0)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dy = Vector(x: 0, y: canvas.height/4)
//create a regular system font
var label = TextShape(text: "Regular System Font", font: Font.systemFont(30.0))!
label.center = canvas.center - dy
canvas.add(label)

//create a bold system font
label = TextShape(text: "Bold System Font", font: Font.boldSystemFont(30.0))!
label.center = canvas.center
canvas.add(label)

//create a italic system font
label = TextShape(text: "Italic System Font", font: Font.italicSystemFont(30.0))!
label.center = canvas.center + dy
canvas.add(label)
{% endhighlight %}
