---
title: Notifications
description: Use notifications to communicate between objects.
date:   2016-06-03 00:01:00 -0700
layout: example
categories: examples, interaction

permalink: /examples/interaction-tap-notifications/
image: poster.png
tags: [interaction, tap, notifications]
author: Travis Kirton
---
![](tap-notifications.png)

## Notifications!
Some times you won't want to hard-code the connection between two objects. For example, let's say we want all the objects to respond to a tap on the canvas. If our objects were created statically we could add them all to the tap's action block like so:

{% highlight swift lineos %}
canvas.addTapGestureRecognizer {
    a.doSomething()
    b.doSomething()
    c.doSomething()
    d.doSomething()
    e.doSomething()
    //etc...
}
{% endhighlight %}

Not ideal...

If the objects were all created dynamically we could keep an array and iterate through it.

{% highlight swift lineos %}
canvas.addTapGestureRecognizer {
    for obj in objArray {
        obj.doSomething()
    }
}
{% endhighlight %}

Better, but this might not be ideal for your situation either.

Our other option is to use a nice technique that allows the canvas to broadcast an event:

{% highlight swift lineos %}
canvas.addTapGestureRecognizer {
    canvas.post("tapped")
}
{% endhighlight %}

And, when you create your objects, you can do this:

{% highlight swift lineos %}
obj.on("tapped", from: canvas) {
    obj.doSomething()
}
{% endhighlight %}

This is an nice alternative that decouples objects. It can be very handy when working between classes and view controllers.

> Did you see how you can specify the sender that you want your object to listen to?

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
