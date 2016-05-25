---
title: Layering
description: You can swap the layer position of any two views.
date:   2016-05-26 00:04:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-layering/
image: poster.png
tags: [views, layers]
author: Travis Kirton
---
![](layering.png)

## Layering
When adding a subview it will be placed above all other subviews. However, after adding a subview you can changes it's layer position. There are 3 main ways of playing with the layering of views.

The following technique will place a view above all other subviews:

{% highlight swift lineos %}
view.bringToFront()
{% endhighlight %}

The following will place a view below all other subviews:

{% highlight swift lineos %}
view.sendToBack()
{% endhighlight %}

The following will swap the z-positions of two views:

{% highlight swift lineos %}
view.positionAbove(shape)
{% endhighlight %}

{% highlight swift lineos %}
shape.positionBelow(view)
{% endhighlight %}

You can also explicitly set the z-position of a view:

{% highlight swift lineos %}
shape.zPosition = 1000
{% endhighlight %}

## Example
{% highlight swift lineos %}
var circles = [Circle]()

override func setup() {
    for i in -1...1 {
        let c = Circle(center: canvas.center + Vector(x: 100, y: 0) * Double(i), radius: 100)
        c.lineWidth = 25
        canvas.add(c)
        circles.append(c)
        c.addTapGestureRecognizer { locations, center, state in
            self.canvas.bringToFront(c)
        }
    }
}
{% endhighlight %}
