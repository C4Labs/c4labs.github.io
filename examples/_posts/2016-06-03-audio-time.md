---
title: Timing
description: How to read the time properties of an audio player.
date:   2016-06-03 00:03:00 -0800
layout: example
categories: examples, audio
permalink: /examples/audio-time/
image: poster.png
tags: [audio, timers, text]
author: Travis Kirton
---
![](time.png)

## Duration
The duration property lets you know how long the current audio player's sample is:

{% highlight swift lineos %}
let d = player.duration
{% endhighlight %}

## Current Time
You can grab the current time like this:

{% highlight swift lineos %}
let ct = player.currentTime
{% endhighlight %}

... and set it as well

{% highlight swift lineos %}
player.currentTime = 1.0
{% endhighlight %}

> If you want to get a constant update for the current time, you'll have to use a `Timer`.

## Example
{% highlight swift lineos %}
let audioPlayer = AudioPlayer("C4Loop.aif")!

override func setup() {
    let font = Font(name: "Helvetica", size: 30.0)!
    //create text shape to display duration of mp3

    let dur = TextShape(text: "Duration: \(audioPlayer.duration)s", font: font)!
    dur.center = canvas.center - Vector(x: 0, y: dur.height)
    canvas.add(dur)

    let cur = TextShape(text: "Current: \(audioPlayer.currentTime)s", font: font)!
    cur.center = canvas.center + Vector(x: 0, y: cur.height)
    canvas.add(cur)

    let t = Timer(interval: 1.0/60.0) {
        ShapeLayer.disableActions = true
        let c = cur.center
        cur.text = String(format: "Current: %.2fs", self.audioPlayer.currentTime)
        cur.center = c
        ShapeLayer.disableActions = false
    }
    t.start()

    audioPlayer.loops = true
    audioPlayer.play()
}
{% endhighlight %}
