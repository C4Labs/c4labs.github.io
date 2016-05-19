---
title: Volume
description: Change the volume of an audio player.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/audio-volume/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](volume.png)

## Volume
This example shows how you can change the volume rate of an audio player.

{% highlight swift lineos %}
let audioPlayer = AudioPlayer("C4Loop.aif")!
var bar: Rectangle!
var barFill: Rectangle!

override func setup() {
    audioPlayer.loops = true
    audioPlayer.play()
    createIndicators()

    canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
        self.audioPlayer.volume = center.x / self.canvas.width
        self.updateBar(center)
    }
}

func updateBar(point: Point) {
    barFill.origin = Point(point.x-canvas.width, 0)
}

func createIndicators() {
    let trianglePoints = [Point(0, canvas.height), Point(canvas.width, 0), Point(canvas.width, canvas.height)]
    let barMask = Triangle(trianglePoints)

    bar = Rectangle(frame: canvas.frame)
    bar.interactionEnabled = false
    bar.lineWidth = 0
    bar.fillColor = clear
    bar.mask = barMask
    canvas.add(bar)

    barFill = Rectangle(frame: bar.bounds)
    barFill.corner = Size()
    barFill.lineWidth = 5.0
    barFill.strokeColor = barFill.fillColor
    bar.add(barFill)

    var points = (Point(), Point(0, canvas.height))
    let dx = Vector(x: 8, y: 0)
    repeat {
        let line = Line(points)
        line.strokeColor = C4Pink
        bar.add(line)
        points.0 += dx
        points.1 += dx
    } while points.0.x < canvas.width
}
{% endhighlight %}
