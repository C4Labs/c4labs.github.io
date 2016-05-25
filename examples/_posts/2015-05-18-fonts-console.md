---
title: Family Names
description: Print out all font family names available on the latest iOS.
date:   2015-05-12 23:59:59 -0800
layout: example
categories: examples, fonts
permalink: /examples/fonts-console/
image: poster.png
tags: [fonts, text]
author: Travis Kirton
---
![](console.png)

## All Family Names
To access all the family names that are available on the current iOS you're developing for, you can call the following class function:

{% highlight swift lineos %}
Font.familyNames()
{% endhighlight %}

A family name is essentially the top-level name for a font. That is, not including the sub-type names like bold, italic, etc... Here are some examples:

`Avenir Next` or,
`Courier New`

And not the specific font names, such as: 

`AvenirNext-Regular` or,
`CourierNewPSMT`

## Example
{% highlight swift lineos %}
if let familyNames = Font.familyNames() as? [String] {
    for name in familyNames.sort({ $0 < $1 }) {
        print(name)
    }
}
{% endhighlight %}
