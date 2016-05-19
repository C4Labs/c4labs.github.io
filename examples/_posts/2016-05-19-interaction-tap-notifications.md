---
title: Notifications
description: Use notifications to communicate between objects.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/interaction-tap-notifications/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](tap-notifications.png)

## System Fonts

{% highlight swift lineos %}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let dy = Vector(x: 0, y: canvas.height/6)

let top = Circle(center: canvas.center - dy, radius: 50)
top.fillColor = C4Pink
canvas.add(top)

let bottom = Circle(center: canvas.center + dy, radius: 50)
canvas.add(bottom)

top.addTapGestureRecognizer { center, location, state in
    top.fillColor = C4Pink
    top.post("tapped")
}

bottom.addTapGestureRecognizer { center, location, state in
    bottom.fillColor = C4Blue
    bottom.post("tapped")
}

canvas.addTapGestureRecognizer { center, location, state in
    self.canvas.backgroundColor = C4Grey
    top.fillColor = C4Grey
    bottom.fillColor = C4Grey
}

on(event: "tapped", from: top) {
    self.canvas.backgroundColor = top.fillColor
}

on(event: "tapped", from: bottom) {
    self.canvas.backgroundColor = bottom.fillColor
}
{% endhighlight %}
