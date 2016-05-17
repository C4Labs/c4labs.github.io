---
title: Anchor Point
description: Change the relative center position of a view.
date:   2016-05-11 09:59:59 -0800
layout: example
categories: examples
permalink: /examples/views-anchorPoint/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](anchorPoint.png)

## Anchor Point
All geometric manipulations to a view occur about the its's `anchorPoint`. You can set the anchor point to something other than the view's center.

![](diagram0.png)

Then, for example, if you rotate the view it will apply the transformation around the `anchorPoint` rather than it's visible center.

![](diagram1.png)

The `anchorPoint` is measured in coordinates relative to the view. It's default value is `(0.5, 0.5)`.

{% highlight swift lineos %}
view.anchorPoint = Point()
{% endhighlight %}

## Example
{% highlight swift lineos %}
for i in 0...9 {
    let t = Triangle([Point(), Point(86,50), Point(0, 100)])
    t.anchorPoint = Point(-1.0, 0.5)
    wait(0.25) {
        t.rotation = 2*M_PI * Double(i)/10
    }
    t.center = canvas.center
    canvas.add(t)
}
{% endhighlight %}
