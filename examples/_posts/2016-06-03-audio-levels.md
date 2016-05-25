---
title: Levels
description: Grab the current levels (aka. meters) from a player.
date:   2016-06-03 00:05:00 -0800
layout: example
categories: examples, audio
permalink: /examples/audio-levels/
image: poster.png
tags: [audio, interaction, timers]
author: Travis Kirton
---
![](levels.png)

## Levels
You can grab the current levels of each channel from an audio sample as it is playing back. To do so you'll need to set up a timer and turn on metering, but otherwise it's pretty easy:

{% highlight swift lineos %}
player.meteringEnabled = true
player.averagePower(0)
{% endhighlight %}

## Example
{% highlight swift lineos %}
let audioPlayer = AudioPlayer("C4Loop.aif")!
var avgL, avgR, peakL, peakR: Line!

override func setup() {
    audioPlayer.play()
    audioPlayer.loops = true
    audioPlayer.meteringEnabled = true
    audioPlayer.play()

    createMeterLines()

    let t = Timer(interval: 1/30.0) {
        self.updateMeters()
    }
    t.start()
}

func updateMeters() {
    ShapeLayer.disableActions = true
    audioPlayer.updateMeters()
    avgL.strokeEnd = pow(10, 0.05 * audioPlayer.averagePower(0))
    avgR.strokeEnd = pow(10, 0.05 * audioPlayer.averagePower(1))
    peakL.strokeEnd = pow(10, 0.05 * audioPlayer.peakPower(0))
    peakR.strokeEnd = pow(10, 0.05 * audioPlayer.peakPower(1))
    ShapeLayer.disableActions = false
}

func createMeterLines() {
    let dx = Vector(x: canvas.width/4.0, y: 0)

    var points = (Point(0, canvas.height), Point())
    points.0 += dx/2.0
    points.1 += dx/2.0

    avgL = Line(points)
    avgL.lineCap = .Butt
    avgL.lineWidth = dx.x
    avgL.strokeColor = C4Pink
    points.0 += dx
    points.1 += dx

    avgR = Line(points)
    avgR.lineCap = .Butt
    avgR.lineWidth = dx.x
    avgR.strokeColor = C4Pink
    points.0 += dx
    points.1 += dx

    peakL = Line(points)
    peakL.lineCap = .Butt
    peakL.lineWidth = dx.x
    points.0 += dx
    points.1 += dx

    peakR = Line(points)
    peakR.lineCap = .Butt
    peakR.lineWidth = dx.x
    points.0 += dx
    points.1 += dx

    canvas.add(avgL)
    canvas.add(avgR)
    canvas.add(peakL)
    canvas.add(peakR)
}
{% endhighlight %}
