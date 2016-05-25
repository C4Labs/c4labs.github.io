---
title: Interactive Subviews
description: Tap to remove a subview, and watch it come back.
date:   2016-05-26 00:06:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-subviews-interactive/
image: poster.png
tags: [views, subviews, interaction]
author: Travis Kirton
---
![](subviews-interactive.png)

## Subviews
When adding a subview to another view it will automatically position itself based on its frame.

If you remove a subview, it will maintain its original position when added back to its superview.

{% highlight swift lineos %}
view.add(shape)
view.remove(shape)
{% endhighlight %}

You can also remove a view from it's superview like so:

{% highlight swift lineos %}
view.add(shape)
shape.removeFromSuperview()
{% endhighlight %}

## Example
{% highlight swift lineos %}
override func setup() {
    canvas.backgroundColor = white
    let points = [Point(), 
                  Point(canvas.center.x, 0), 
                  Point(0, canvas.center.y), 
                  canvas.center]
    for p in points {
        let r = Rectangle(frame: Rect(p, Size(canvas.width/2, canvas.height/2)))
        if p != points.first && p != points.last {
            r.fillColor = C4Pink
        }
        r.corner = Size()
        r.lineWidth = 25.0
        r.addTapGestureRecognizer { locations, center, state in
            self.temporarilyRemove(r)
        }
        canvas.add(r)
    }
}

func temporarilyRemove(shape: Shape) {
    shape.removeFromSuperview()
    wait(1.0) {
        self.canvas.add(shape)
    }
}
{% endhighlight %}
