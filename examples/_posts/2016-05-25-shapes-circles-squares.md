---
title: Circles & Squares
description: Create circles, ellipses, squares and rectangles.
date:   2016-05-25 00:00:00 -0700
layout: example
categories: examples, shapes
permalink: /examples/shapes-circles-squares/
image: poster.png
tags: [shapes, basics]
author: Travis Kirton
---
![](circles-squares.png)

## Ellipses, Squares, Rectangles
To create an ellipse, a square or a rectangle you specify a `Rect` into which the shape will build itself.

{% highlight swift lineos %}
let rectangle = Rectangle(frame: Rect(0, 0, 100, 200))
{% endhighlight %}

{% highlight swift lineos %}
let square = Rectangle(frame: Rect(0, 0, 100, 100))
{% endhighlight %}
 
{% highlight swift lineos %}
let ellipse = Ellipse(frame: rectangle.frame)
{% endhighlight %}

## Circles
To create a circle, you specify a center `Point` around which the shape is drawn using its radius.

{% highlight swift lineos %}
let circle = Circle(center: Point(0, 0), radius: 50)
{% endhighlight %}


## Example
{% highlight swift lineos %}
override func setup() {
    let rectangle = Rectangle(frame: Rect(0, 0, 100, 200))
    let square = Rectangle(frame: Rect(0, 0, 100, 100))
    let ellipse = Ellipse(frame: rectangle.frame)
    let circle = Circle(center: Point(0, 0), radius: 50)

    //Figure out the horizontal whitespace (i.e. between shapes and the edges of the canvas)
    let whiteSpace = (canvas.width - 4 * rectangle.width)/5 //divide by 5 bc there are 5 gaps

    //Create a displacement vector
    let dx = Vector(x: whiteSpace + rectangle.width, y: 0)

    //create a variable point, used to set the center of each shape
    var center = Point(whiteSpace + rectangle.width/2, canvas.center.y)

    //set the x position for the rectangle
    center.x = whiteSpace + rectangle.width/2
    rectangle.center = center

    //set the x position for the square
    center += dx
    square.center = center

    //set the x position for the circle
    center += d x
    circle.center = center

    //set the x position for the ellipse
    center += dx
    ellipse.center = center

    //add all the objects to the canvas
    canvas.add(rectangle)
    canvas.add(square)
    canvas.add(circle)
    canvas.add(ellipse)
}
{% endhighlight %}
