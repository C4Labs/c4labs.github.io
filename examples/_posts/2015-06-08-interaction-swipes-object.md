---
title: Multiple Swipe Gestures
description: Add multiple gestures to a single object.
date:   2015-06-08 00:07:00 -0800
layout: example
categories: examples, interaction
permalink: /examples/interaction-swipes-object/
image: poster.png
tags: [interaction, swipes]
author: Travis Kirton
---
![](swipes-object.png)

## A Swipe for Every Direction
A swipe can only register in a single direction. So, if you want to add multiple swipes to a single object you'll have to add multiple gesture recognizers. Here are the directions you can choose from:

{% highlight swift lineos %}
.Right //Default
.Down
.Left
.Up
{% endhighlight %}

## Example
{% highlight swift lineos %}
override func setup() {
    let r = Rectangle(frame: canvas.frame)
    r.corner = Size()
    canvas.add(r)

    let c = Circle(center: canvas.center, radius: canvas.height/3)
    c.strokeColor = white
    canvas.add(c)

    addSwipes(c)
    addSwipes(r)
}

func addSwipes(object: Shape) {
    addSwipe(object, direction: .Right)
    addSwipe(object, direction: .Down)
    addSwipe(object, direction: .Left)
    addSwipe(object, direction: .Up)
}

func addSwipe(object: Shape, direction dir: UISwipeGestureRecognizerDirection) {
    let swipe = object.addSwipeGestureRecognizer { (locations, center, state, direction) in
        switch direction {
        case UISwipeGestureRecognizerDirection.Right:
            object.fillColor = C4Blue
        case UISwipeGestureRecognizerDirection.Down:
            object.fillColor = C4Pink
        case UISwipeGestureRecognizerDirection.Left:
            object.fillColor = C4Purple
        default:
            object.fillColor = C4Grey
        }
    }
    swipe.direction = dir
}
{% endhighlight %}
