---
title: Translate
description: Translate a view.
date:   2016-05-26 00:14:00 -0800
layout: example
categories: examples, views
permalink: /examples/views-translate/
image: poster.png
tags: [views, transform, translate]
author: Travis Kirton
---
![](translate.png)

## Translate
You can translate a view by creating a `Transform` and setting it like this:

{% highlight swift lineos %}
view.transform = Transform.makeTranslation()
{% endhighlight %}

## Example
{% highlight swift lineos %}
let c = Circle(center: canvas.center, radius: 75)
c.lineWidth = 15.0

let scale = Transform.makeScale(2.0, 2.0)

let c2 = Circle(center: c.center, radius: 75)
c2.lineWidth = c.lineWidth

c2.transform = scale
c2.center = canvas.center

canvas.add(c2)
canvas.add(c)
{% endhighlight %}
