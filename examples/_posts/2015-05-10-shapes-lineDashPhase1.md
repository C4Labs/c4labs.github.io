---
title: Dash Phase 1
description: Offest a Line's dash pattern.
date:   2015-05-10 10:59:59 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-lineDashPhase1/
image: poster.png
tags: [shapes, line, dash phase, animation]
author: Travis Kirton
---
![](lineDashPhase.png)

## Dash Phase
Let's say you have a pattern like this `5,10,15,20,25,30,35,40,45,50,55,60`... Which ends up being 390 points wide. And, let's also say you have a line that is `200pt` wide.

You can offset the `phase` (i.e. where the patten starts) so that you can see the portion that would otherwise lie outside the shape's bounds.

{% highlight swift lineos %}
shape.lineDashPhase = 200.0
{% endhighlight %}

## Example
{% highlight swift lineos %}
//create the line and center it
let points = (Point(0, canvas.center.y), Point(canvas.width, canvas.center.y))
let line = Line(points)
line.lineWidth = 100.0
canvas.add(line)

//create a dash pattern
var dashPattern = [Double]()
for i in Int(line.lineWidth)..<Int(canvas.width + line.lineWidth) {
    dashPattern.append(Double(i))
    dashPattern.append(dashPattern.last!)
}
line.lineDashPattern = dashPattern

let a = ViewAnimation(duration:30.0) {
    line.strokeColor = C4Pink
    //set the final dash phase to the entire width of the pattern
    line.lineDashPhase = dashPattern.reduce(0, combine: +)
}

a.autoreverses = true
a.repeats = true
a.animate()
{% endhighlight %}

> Check out the way we use `reduce` to calculate the sum of the entire pattern array.

![](){: data-id="IncompatibleEnormousBonobo" .gfyitem }