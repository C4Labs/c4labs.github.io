---
title: Cells
description: Create randomly moving layered cells.
date:   2016-06-09 00:02:00 -0800
layout: example
categories: examples, advanced
permalink: /examples/advanced-cells/
image: poster.png
tags: [advanced, animation, random, movement]
author: Travis Kirton
---
![](cells.png)

## Overlapping Cells
This example introduces techniques for creating layered, random animations. Here is a short list of things you should learn:

* Setting up layered animations
* Creating randomly generated objects
* Styling layers
* Using tuples to synchronize motion
* Using Polar Coordinate to generate random movement targets
* Animation delays to offset motion between layers
* Animation groups to initiate motion
* Completion observers to generate new motion

## Example
{% highlight swift lineos %}
override func setup() {
    //create 3 arrays of shapes
    var bottom = [Circle]()
    var middle = [Circle]()
    var top = [Circle]()

    //generate 40 "cells"
    for _ in 1...40 {
        //calculate the smallest radius of the current cell
        let r = Double(random(min: 8, max: 16))

        //create 3 layers for the cell
        bottom.append(Circle(center: canvas.center, radius: r * 2))
        middle.append(Circle(center: canvas.center, radius: r * 1.5))
        top.append(Circle(center: canvas.center, radius: r))
    }

    //style the bottom layer of each cell
    for c in bottom {
        c.lineWidth = 0
        c.fillColor = C4Pink
        canvas.add(c)
    }

    //style the middle layers of each cell
    for c in middle {
        c.lineWidth = 0
        canvas.add(c)
    }

    //style the top layer of each cell
    for c in top {
        c.lineWidth = 0
        c.fillColor = C4Purple
        canvas.add(c)
    }

    //wait a little bit to get going...
    wait(1.0) {
        for i in 0..<bottom.count {
            self.move((bottom[i], middle[i], top[i]))
        }
    }
}

//a cell is made up of 3 shapes, so move the all!
func move(shapes: (Circle, Circle, Circle)) {
    //create a random duration, between 1 and 4 seconds
    let d = random01()*3 + 1
    //create a random radius for the length of movement
    let r = (180 - shapes.0.width/2) * random01()
    //create a random angle
    let 𝝧 = random01() * 2 * M_PI
    //generate a target point using polar coordinates, centered on the canvas
    let point = Point(r * cos(𝝧), r * sin(𝝧)) + Vector(canvas.center)

    //create animation for the bottom part of the cell
    let b = ViewAnimation(duration: d) {
        shapes.0.center = point
    }
    //offset this animation by 1/20th of a second
    b.delay = 0.05
    //when the bottom has finished moving...
    b.addCompletionObserver {
        //wait for a random amount of time, up to 1 second
        wait(random01()) {
            //move everything again
            self.move(shapes)
        }
    }
    //create animation for the middle part of the cell
    let m = ViewAnimation(duration: d) {
        shapes.1.center = point
    }
    //offset this animation by 1/40th of a second
    m.delay = 0.025

    //create animation for the top part of the cell
    let t = ViewAnimation(duration: d) {
        shapes.2.center = point
    }

    //trigger all the animations
    let group = ViewAnimationGroup(animations: [b, m, t])
    group.animate()
}
{% endhighlight %}
