---
title: Audio Player
description: Create an audio player.
date:   2016-06-01 00:00:00 -0700
layout: example
categories: examples, audio
permalink: /examples/audio-create/
image: poster.png
tags: [audio]
author: Travis Kirton
---
## Audio Player
This example shows how you can create and play an audio sample. Creating a player is simple:

{% highlight swift lineos %}
let ap = AudioPlayer("C4Loop.aif")
{% endhighlight %}

> Like a movie, you **have to** specify the file extension of an audio player.

### In Memory
You need to create an audio player property outside the scope of a method. If you don't the app won't keep the player in memory and it will disappear without ever playing.

{% highlight swift lineos %}
class WorkSpace: CanvasController {
    let audioPlayer = AudioPlayer()
    override func setup() {
        //Playback here, or in another method...
    }
}
{% endhighlight %}

## Example
{% highlight swift lineos %}
let audioPlayer = AudioPlayer("C4Loop.aif")!

override func setup() {
    audioPlayer.loops = true
    audioPlayer.play()
}
{% endhighlight %}
