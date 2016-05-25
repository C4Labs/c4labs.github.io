---
title: Phasing
description: Offsetting the motion of rotating objects.
date:   2015-06-09 00:01:00 -0800
layout: example
categories: examples, advanced
permalink: /examples/advanced-phasing/
image: poster.png
tags: [advanced, animation, anchor, point]
author: Travis Kirton
---
![](phasing.png)

## Phasing
This short example will introduce you to creating complex visual effects using the following techniques:

* Offseting a shape's `anchorPoint`
* Generating cyclical animations without using `repeat`
* Offseting the animation durations to get a phased-looking effect

## Example
{% highlight swift lineos %}
var shapes = [Shape]()

override func setup() {
    //create 25 shapes (enough to fill the screen)
    for i in 0..<25 {
        let s = Rectangle(frame: Rect(0, 0, self.canvas.height, 16))
        s.opacity = Double(i + 10)/40
        s.lineWidth = 0.0

        //offset the anchorPoint of each shape by the current index
        s.anchorPoint = Point(0.5, Double(i))
        s.center = canvas.center
        shapes.append(s)
        canvas.add(s)
    }

    //wait just a bit before starting things up
    wait(1.0) {
        self.initiateAnimations()
    }
}

//rotate a shape for a given duration
func rotate(shape: Shape, duration: Double) {
    //create the animation
    let a = ViewAnimation(duration: duration) {
        //rotate it halfway around a circle
        shape.rotation += M_PI
    }
    //when complete, initiate another rotation
    a.addCompletionObserver {
        self.rotate(shape, duration: duration)
    }
    a.animate()
}

func initiateAnimations() {
    //offset the duration of each shape by the current index
    //shapes further away will take longer to rotate
    for i in 0..<shapes.count {
        let s = shapes[i]
        rotate(s, duration: Double(i) * 0.05 + 1.0)
    }
}
{% endhighlight %}
