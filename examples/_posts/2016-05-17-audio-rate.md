---
title: Rate
description: Change the playback rate of an audio player.
date:   2016-05-15 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/audio-rate/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
## Rate
This example shows how you can change the playback rate of an audio player.

Prior to changing the rate you'll need to enable the player to have a different rate.

{% highlight swift lineos %}
player.enableRate = true
player.rate = 0.25
{% endhighlight %}

## Example
{% highlight swift lineos %}
let audioPlayer = AudioPlayer("C4Loop.aif")!
override func setup() {
    audioPlayer.enableRate = true
    audioPlayer.rate = 0.25
    audioPlayer.play()
}
{% endhighlight %}
