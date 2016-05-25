---
title: Colors & Locations
description: Change the colors of a gradient and locations where they draw.
date:   2016-05-06 23:59:59 -0800
layout: example
categories: examples, advanced
permalink: /examples/gradients-colors-locations/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
author: Travis Kirton
---
![](colors-locations.png)

## Colors & Locations
You can change the colors and locations of a gradient.

### Colors
By default, a gradient has the following 2 colors:

{% highlight swift lineos %}
[C4Pink, C4Blue]
{% endhighlight %}

This implies that the gradient will draw `C4Pink` from it's start point to `C4Blue` at its end point.

You can change this value by setting the `colors` variable with an array of at least 2 `Color` objects.

{% highlight swift lineos %}
gradient.colors = [C4Blue, C4Grey, C4Pink, C4Purple]
{% endhighlight %}

### Locations
By default, a gradient has the following 2 locations:

{% highlight swift lineos %}
[0, 1]
{% endhighlight %}

These "normalized" values map to the start and end points of the gradient. If you have more than 2 colors you will need to also specify an array of locations that have the same count as the colors array.

{% highlight swift lineos %}
gradient.locations = [0, 0.33, 0.66, 1.0]
{% endhighlight %}

## Example
{% highlight swift lineos %}
let g = Gradient(frame: canvas.frame)
g.colors = [C4Blue, C4Grey, C4Pink, C4Purple]
g.locations = [0, 0.33, 0.66, 1.0]
canvas.add(g)
{% endhighlight %}
