---
title: Path
description: Change the shape of a shape.
date:   2016-05-25 00:22:00 -0800
layout: example
categories: examples, shapes
permalink: /examples/shapes-path/
image: poster.png
tags: [shapes, path]
author: Travis Kirton
---
![](path.png)

## Path
Yes. You **can** change the shape of a shape by changing it's `path` property.

{% highlight swift lineos %}
shape.path = someNewPath
{% endhighlight %}

## Example
{% highlight swift lineos %}
let small = Star(center: canvas.center, pointCount: 25, innerRadius: 50, outerRadius: 100)
let large = Star(center: canvas.center, pointCount: 25, innerRadius: 150, outerRadius: 100)
canvas.add(small)

let a = ViewAnimation(duration: 1.0) {
    small.path = large.path
    small.center = self.canvas.center
    small.fillColor = C4Pink
}
a.autoreverses = true
a.repeats = true
a.animate()
{% endhighlight %}

![](){: data-id="AncientDistinctHalibut" .gfyitem }