---
title: Random Color Tap
description: Use a tap to randomly change the color of objects.
date:   2016-06-03 00:00:00 -0700
layout: example
categories: examples, interaction
permalink: /examples/interaction-tap-object-random-color/
image: poster.png
tags: [interaction, tap, random]
author: Travis Kirton
---
![](tap-object-random-color.png)

## Trigger Random Behaviour
You can add gestures to any visible object, including the `canvas`. This simple example shows you how to trigger a change in color to an object when it is tapped. 

{% highlight swift lineos %}
obj.addTapGestureRecognizer { locations, center, state in
    //do stuff
}
{% endhighlight %}

> An object's tap gesture is discreet to itself, once it registers you know that specific object has been acted upon. You won't ever have to check the location of the gesture to confirm which object has been tapped.

## Example
{% highlight swift lineos %}
let dx = Vector(x: canvas.width/4, y: 0)

for i in -1...1 {
    let c = Circle(center: canvas.center + (dx * Double(i)), radius: canvas.height/6)
    c.lineWidth = 40.0
    c.addTapGestureRecognizer { locations, center, state in
        c.fillColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
        c.strokeColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
    }
    canvas.add(c)
}
{% endhighlight %}
