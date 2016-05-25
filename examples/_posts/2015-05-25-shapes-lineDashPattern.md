---
title: Dash Pattern
description: Set the dash pattern of a shape's stroke.
date:   2015-05-25 00:14:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-lineDashPattern/
image: poster.png
tags: [shapes, line, dash pattern]
author: Travis Kirton
---
![](lineDashPattern.png)

## Dash Pattern
You can easily set the dash pattern for the stroke of a shape.

{% highlight swift lineos %}
shape.lineDashPattern = [2]
{% endhighlight %}

### Pattern Arrays
To set the pattern, specify an array of at least 1 value. The pattern repeats itself so even-count arrays will be symmetric, where odd-count arrays will alternate the occurrence of strokes and dashes.

{% highlight swift lineos %}
[2] becomes [2, 2, 2, 2, ...]
[2, 4] becomes [2, 4, 2, 4, ...]
[2, 4, 6] becomes [2, 4, 6, 2, 4, 6, ...] //the first 2 is a dash, the second is a gap
{% endhighlight %}

#### Stroke-Gap
The order of the strokes and gaps looks like this:

`[stroke, gap, stroke, gap, ...]`

## Example
{% highlight swift lineos %}
var line1, line2: Line!

override func setup() {
    createLines()
    line1.lineDashPattern = [5, 10]
    line2.lineDashPattern = [15, 30]
}

func createLines() {
    let dy = Vector(x: 0, y: canvas.height/3)

    //create end points for the first line
    var linePoints = (Point() + dy, Point(canvas.width, 0) + dy)

    //create the first line
    line1 = Line(linePoints)
    line1.lineWidth = 5

    linePoints.0 += dy
    linePoints.1 += dy

    //create the second line
    line2 = Line(linePoints)
    line2.lineWidth = 5

    //add the lines to the canvas
    canvas.add(line1)
    canvas.add(line2)
}
{% endhighlight %}