---
title: State Switching
description: Use a long press gesture's state to update a shape's color.
date:   2016-05-08 23:59:59 -0800
layout: example
categories: examples, interaction

permalink: /examples/interaction-longPress-states/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](longPress-states.png)

## State Switching
Every gesture has the following states:

{% highlight swift lineos %}
.Began
.Changed
.Ended
.Possible
.Cancelled
.Failed
{% endhighlight %}

You'll mostly be using the top 3, and when you do this is how you do it:

{% highlight swift lineos %}
obj.addLongPressGestureRecognizer { locations, center, state {
	switch state {
	case .Began:
	    //do stuff
	case .Changed: 
	    // do stuff
	case .Ended: 
	    // do stuff
    }
}
{% endhighlight %}

### Minimum Press Duration
By default, a long press gesture takes `0.25s` to trigger. That means the user needs to hold down for that long before the `.Began` state triggers. However, you can easily change that time like this:

{% highlight swift lineos %}
press.minimumPressDuration = 0.0 
{% endhighlight %}

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: canvas.height/3)
c.lineWidth = 40.0
let press = c.addLongPressGestureRecognizer { locations, center, state in
    switch state {
    case .Began, .Changed:
        c.fillColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
        c.strokeColor = Color(red: random01(), green: random01(), blue: random01(), alpha: 1.0)
    default:
        c.fillColor = C4Blue
        c.strokeColor = C4Purple
    }
}
press.minimumPressDuration = 0.0
canvas.add(c)
{% endhighlight %}
