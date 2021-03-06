---
title: Playback
description: Toggle the playback of an audio player.
date:   2016-06-01 00:04:00 -0700
layout: example
categories: examples, audio
permalink: /examples/audio-play-pause/
image: poster.png
tags: [audio, interaction]
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
