---
title: Playback
description: Toggle the playback of an audio player.
date:   2016-05-17 23:59:59 -0800
layout: example
categories: examples
permalink: /examples/audio-play-pause/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](play-pause.png)

## Playback
You can initiate playback like so:

{% highlight swift lineos %}
player.play()
{% endhighlight %}

### Pause()
You can pause playback like so:

{% highlight swift lineos %}
player.pause()
{% endhighlight %}

> Pausing keeps the player's current time, when you hit `play()` again it will resume from where it left off

### Stop()
You can stop playback like so:

{% highlight swift lineos %}
player.stop()
{% endhighlight %}

> Stopping resets the player's current time, when you hit `play()` again it will resume from its beginning

### Playing
You can check to see whether or not a player is currently playing, like this:

{% highlight swift lineos %}
if player.playing {
    //do stuff
}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let audioPlayer = AudioPlayer("C4Loop.aif")!

override func setup() {
    audioPlayer.loops = true
    pause() //call this to change the bg color!
    canvas.addTapGestureRecognizer { locations, center, state in
        self.audioPlayer.playing ? self.pause() : self.play()
    }
}

func play() {
    canvas.backgroundColor = C4Blue
    audioPlayer.play()
}

func pause() {
    canvas.backgroundColor = C4Pink
    audioPlayer.pause()
}
{% endhighlight %}
