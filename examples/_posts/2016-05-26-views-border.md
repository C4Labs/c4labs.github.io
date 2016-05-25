---
title: Border
description: Reveal and style the border of a view.
date:   2016-05-26 00:02:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-border/
image: poster.png
tags: [views, border]
author: Travis Kirton
---
![](border.png)

## Border
Every view has a border, which by default is invisible. To reveal and style the border you can set the following properties.

{% highlight swift lineos %}
width
color
radius
{% endhighlight %}

The border itself is actually a property, so you set the above like this:

{% highlight swift lineos %}
view.border.width = 10.0
{% endhighlight %}

You can even copy an entire border between views:

{% highlight swift lineos %}
shape.border = view.border
{% endhighlight %}

## Example
{% highlight swift lineos %}
let img = Image("chop")!
img.center = canvas.center
img.border.width = 10.0
img.border.color = C4Pink
canvas.add(img)
{% endhighlight %}
