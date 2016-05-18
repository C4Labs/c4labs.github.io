---
title: Pixels
description: Create an image using Pixel data.
date:   2016-05-14 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/images-pixels/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](pixels.png)

## Images from Pixel Data
This example shows how to create Pixel data that you can use to generate an image.

{% highlight swift lineos %}
let rawData = [Pixel]()
for _ in 1...100 {
    //create pixel data and add it to the array
}
let image = Image(pixels: rawData, size: Size(10,10))
{% endhighlight %}

### Pixel
We created a `Pixel` struct which is unique to C4. It is a very simple struct that contains 4 values, measured in 0...255, and has four initializers.

Here are three two ways to create a `Pixel`:

{% highlight swift lineos %}
let p = Pixel() //defaults to black
{% endhighlight %}

{% highlight swift lineos %}
let p = Pixel(255, 0, 0, 255) //red
{% endhighlight %}

{% highlight swift lineos %}
let p = Pixel(gray: 128) //Mid-gray
{% endhighlight %}

{% highlight swift lineos %}
let p = Pixel(C4Blue) //extracts the values from a Color
{% endhighlight %}

## Example
{% highlight swift lineos %}
//we create an array for our color data
var rawData = [Pixel]()

let colors = [C4Pink, C4Blue, C4Purple, C4Grey]
//for every row
for _ in 0..<Int(canvas.height) {
    //color each pixel in that row
    for _ in 0..<Int(canvas.width) {
        //create a pixel from a random color in our set
        rawData.append(Pixel(colors[random(below: 4)]))
    }
}

let img = Image(pixels: rawData, size: canvas.size)
img.center = canvas.center
canvas.add(img)
{% endhighlight %}
