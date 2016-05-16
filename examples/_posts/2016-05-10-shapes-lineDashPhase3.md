---
title: Dash Phase 3
description: Fancy patterns, oh my.
date:   2016-05-10 08:59:59 -0800
layout: example
categories: examples
permalink: /examples/shapes-lineDashPhase3/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](lineDashPhase.png)

## Dash Phase
Like a circle, the dash pattern will overlap at the begin/end of any other closed shape's circumference.

## Example
{% highlight swift lineos %}
//create the circle and center it
let circle = Circle(center: self.canvas.center, radius: 150)
circle.lineWidth = 10.0
circle.fillColor = Color(UIColor.clearColor())

//create a dash pattern
var dashPattern = [Double]()
let circumference = M_PI * circle.width
for i in 1..<Int(circumference) {
    dashPattern.append(Double(i))
}

circle.lineDashPattern = dashPattern
//add the line to the canvas
self.canvas.add(circle)
//animate it after a short wait
let a = ViewAnimation(duration:180) {
    circle.strokeColor = C4Pink
    //set the final dash phase to the entire width of the pattern
    circle.lineDashPhase = dashPattern.reduce(0, combine: +)
}

a.autoreverses = true
a.animate()
{% endhighlight %}

> Check out the way we use `reduce` to calculate the sum of the entire pattern array.

![](){: data-id="ConsiderateSophisticatedGrouse" .gfyitem }