---
title: Processing Examples
description: A brief comparison of Processing and C4.
date:   2016-03-02 00:17:39 -0800
layout: tutorial
length: 10 - 20 minutes
categories: tutorials
permalink: /tutorials/processing/
image: poster.png
tags: [getting started, basics, introduction, easy, c4]
---

#Processing Examples
Here are eight Processing examples coded in C4. 

## Pie Chart
Creating shapes in C4 is very similar to Processing. Here you'll see that C4 has an `Arc` shape that corresponds to Processing's `arc()` function.

### Processing 
{: .toc-omit }
![](PieChart_P5.png)

From: [Pie Chart](https://processing.org/examples/piechart.html)


> Uses the arc() function to generate a pie chart from the data stored in an array.

{% highlight swift lineos %}
int[] angles = { 30, 10, 45, 35, 60, 38, 75, 67 };

void setup() {
  size(640, 360);
  noStroke();
  noLoop();  // Run once and stop
}

void draw() {
  background(100);
  pieChart(300, angles);
}

void pieChart(float diameter, int[] data) {
  float lastAngle = 0;
  for (int i = 0; i < data.length; i++) {
    float gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}
{% endhighlight %}

### C4
{: .toc-omit }
![](PieChart_C4.png)

There are many math functions that are common between both projects. This example also shows that using C4's `map` function is almost identical.

{% highlight swift lineos %}
override func setup() {
    let angles: [Double] = [30.0, 10, 45, 35, 60, 38, 75, 67]
    var pΘ = 0.0
    for i in 0..<angles.count {
        let c = map(Double(i), min: 0, max: Double(angles.count), toMin: 0, toMax: 1)
        let Θ = degToRad(angles[i])
        let a = Wedge(center: canvas.center, radius: 150, start: pΘ, end: pΘ+Θ)
        a.fillColor = Color(red: c, green: c, blue: c, alpha: 1.0)
        a.lineWidth = 0.0
        pΘ += Θ
        canvas.add(a)
    }
}
{% endhighlight %}


## Array2D
The effect of the Array 2D example shows how to create a fading grid of points. This example shows you how to create the same effect, even though the C4 version doesn't actually use arrays.

### Processing
{: .toc-omit }
![](Array2D_P5.png)

From: [Array 2D](https://processing.org/examples/array2d.html)

> Demonstrates the syntax for creating a two-dimensional (2D) array. Values in a 2D array are accessed through two index values. 2D arrays are useful for storing images. In this example, each dot is colored in relation to its distance from the center of the image.

{% highlight swift lineos %}
float[][] distances;
float maxDistance;
int spacer;

void setup() {
  size(640, 360);
  maxDistance = dist(width/2, height/2, width, height);
  distances = new float[width][height];
  for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
      float distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
  noLoop();  // Run once and stop
}

void draw() {
  background(0);
  for (int y = 0; y < height; y += spacer) {
    for (int x = 0; x < width; x += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}
{% endhighlight %}

### C4
{: .toc-omit }
![](Array2D_C4.png)

Instead of points, we create `Circle` shapes that are `1pt` in diameter.

{% highlight swift lineos %}
override func setup() {
    let maxDistance = distance(Point(), rhs: canvas.center)
    canvas.backgroundColor = black
    var pt = Point(8, 8)

    repeat {
        repeat {
            let c = Circle(center: pt, radius: 0.5)
            let d = distance(pt, rhs: canvas.center) / maxDistance
            c.lineWidth = 0.0
            c.fillColor = Color(red: d, green: d, blue: d, alpha: 1.0)
            canvas.add(c)
            pt.x += 10.0
        } while pt.x < canvas.width
        pt.y += 10.0
        pt.x = 8.0
    } while pt.y < canvas.height
}
{% endhighlight %}

## MouseFunctions
There is no mouse in C4, but there are gesture recognizers. This example shows how you can add a long press gesture recognizer to an object to achieve a similar effect to `mousePressed`, `mouseDragged` and `mouseReleased`.

### Processing
{: .toc-omit }
![](MouseFunctions_P5.png)

From: [Mouse Functions](https://processing.org/examples/mousefunctions.html)

> Click on the box and drag it across the screen.

{% highlight swift lineos %}
float bx;
float by;
int boxSize = 75;
boolean overBox = false;
boolean locked = false;
float xOffset = 0.0; 
float yOffset = 0.0; 

void setup() {
  size(640, 360);
  bx = width/2.0;
  by = height/2.0;
  rectMode(RADIUS);  
}

void draw() { 
  background(0);
  
  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
    if(!locked) { 
      stroke(255); 
      fill(153);
    } 
  } else {
    stroke(153);
    fill(153);
    overBox = false;
  }
  
  rect(bx, by, boxSize, boxSize);
}

void mousePressed() {
  if(overBox) { 
    locked = true; 
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-bx; 
  yOffset = mouseY-by; 

}

void mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset; 
    by = mouseY-yOffset; 
  }
}

void mouseReleased() {
  locked = false;
}
{% endhighlight %}

### C4
![](MouseFunctions_C4.png)

To achieve a similar effect in C4 requires a lot less code because iOS handles the gesture for you. Simply let the system track touch positions for you.

{% highlight swift lineos %}
override func setup() {
    let rect = Rectangle(frame: Rect(0,0,100,100))
    rect.center = canvas.center
    rect.strokeColor = clear
    canvas.add(rect)

    var position = Point()
    let press = rect.addLongPressGestureRecognizer { (locations, center, state) -> () in
        switch state {
        case .Began:
            ShapeLayer.disableActions = true
            rect.strokeColor = C4Pink
            rect.fillColor = white
            position = center
        case .Changed:
            let dxdy = Vector(center) - Vector(position)
            rect.center += dxdy
        case .Ended:
            rect.strokeColor = clear
            rect.fillColor = C4Blue
        default:
            _ = ""
        }
    }
    press.minimumPressDuration = 0.0
}
{% endhighlight %}

## Storing Input
I really like the aesthetic of how the circles fade away as you move your mouse around the screen. In C4, there are no draw loops and we cannot rely on frame-based updating. However, we can create animations that give us the same effect! 

### Processing
![](StoringInput_P5.png)

From: [Storing Input](https://processing.org/examples/storinginput.html)

> Move the mouse across the screen to change the position of the circles. The positions of the mouse are recorded into an array and played back every frame. Between each frame, the newest value are added to the end of each array and the oldest value is deleted.

{% highlight swift lineos %}
int num = 60;
float mx[] = new float[num];
float my[] = new float[num];

void setup() {
  size(640, 360);
  noStroke();
  fill(255, 153); 
}

void draw() {
  background(51); 
  
  // Cycle through the array, using a different entry on each frame. 
  // Using modulo (%) like this is faster than moving all the values over.
  int which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;
  
  for (int i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    int index = (which+1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }
}
{% endhighlight %}

### C4
![](StoringInput_C4.png)

Here you'll see how we create an animation for every circle which, upon completion, removes that circle from the canvas.

{% highlight swift lineos %}
override func setup() {
    canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
        ShapeLayer.disableActions = true
        let circle = Circle(center: center, radius: 30)
        self.canvas.add(circle)
        ShapeLayer.disableActions = false

        let a = ViewAnimation(duration: 1.0) {
            circle.opacity = 0.0
            circle.transform.scale(0.01, 0.01)
        }
        a.addCompletionObserver {
            circle.removeFromSuperview()
        }
        a.curve = .Linear
        a.animate()
    }
}
{% endhighlight %}

## Continuous Lines
Drawing a line in Processing is dead-easy. In C4, there's a bit more complexity because a line is actually a `Shape` object. The major difference is that in C4 you end up with an object whose properties can be animated, copied, manipulated and styled rather than a bitmap.

### Processing
![](ContinuousLine_P5.png)

From: [Continuous Lines](https://processing.org/examples/continuouslines.html)

> Click and drag the mouse to draw a line.

{% highlight swift lineos %}
void setup() {
  size(640, 360);
  background(102);
}

void draw() {
  stroke(255);
  if (mousePressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
{% endhighlight %}

### C4
![](ContinuousLine_C4.png)

Here you'll see things are slightly more cumbersome because you have to create a shape object. But, it's not _that_ much more code __and__ you can do a lot with the shape object.

{% highlight swift lineos %}
override func setup() {
    let p = Path()
    let poly = Polygon()
    canvas.add(poly)
    canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
        if state == .Began {
            p.moveToPoint(center)
        } else {
            p.addLineToPoint(center)
        }
        poly.path = p
    }
}
{% endhighlight %}

## Pattern
Tracking the speed of mouse movement requires you to store the previous position and do a little displacement calculation. In C4, the gesture recognizer handles that kind of thing for you.

### Processing
![](Pattern_P5.png)

From: [Patterns](https://processing.org/examples/pattern.html)

> Move the cursor over the image to draw with a software tool which responds to the speed of the mouse.

{% highlight swift lineos %}
void setup() {
  size(640, 360);
  background(102);
}

void draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

void variableEllipse(int x, int y, int px, int py) {
  float speed = abs(x-px) + abs(y-py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
{% endhighlight %}

### C4
![](Pattern_C4.png)

Here we grab the `velocity` of the pan gesture and use its values `x` and `y` to manipulate the size of a new circle as well as its `lineWidth`.

{% highlight swift lineos %}
override func setup() {
    var circles = [Circle]()
    canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
        let c = Circle(center: center, radius: abs(velocity.x/50.0))
        c.lineWidth = abs(velocity.y/100.0)
        self.canvas.add(c)
        circles.append(c)
        if circles.count > 100 {
            circles[0].removeFromSuperview()
            circles.removeAtIndex(0)
        }
    }
}
{% endhighlight %}

## VectorMath
Vector math is a powerful component of Processing, and C4 too.

### Processing
![](VectorMath_P5.png)

From: [Vector Math](https://processing.org/examples/vectormath.html)

> Demonstrating some basic vector math: subtraction, normalization, scaling.  Normalizing a vector sets its length to 1.

{% highlight swift lineos %}
void setup() {
  size(640,360);
}

void draw() {
  background(0);
  
  PVector mouse = new PVector(mouseX,mouseY);
  PVector center = new PVector(width/2,height/2);
  mouse.sub(center);
  mouse.normalize();
  mouse.mult(150);

  translate(width/2,height/2);

  stroke(255);
  strokeWeight(4);
  line(0,0,mouse.x,mouse.y);
  
}
{% endhighlight %}

### C4
![](VectorMath_C4.png)

Setting the `anchorPoint` to `{0, 0}` allows for rotating the shape around the beginning of the line, rather than its `center`.

{% highlight swift lineos %}
override func setup() {
    let line = Line((Point(),Point(100,0)))
    line.opacity = 0.25
    line.anchorPoint = Point(0,0)
    line.lineWidth = 20
    line.center = canvas.center
    canvas.add(line)

    let vc = Vector(canvas.center)
    canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
        let vl = Vector(center)
        let Θ = (vl-vc).heading

        ShapeLayer.disableActions = true
        line.rotation = Θ
    }
}
{% endhighlight %}

## Follow1
This builds on the `VectorMath` example by showing how you can embed objects in one another.

### Processing
![](Follow1_P5.png)

From: [Follow 1](https://processing.org/examples/follow1.html) 

> A line segment is pushed and pulled by the cursor.

{% highlight swift lineos %}
float x = 100;
float y = 100;
float angle1 = 0.0;
float segLength = 50;

void setup() {
  size(640, 360);
  strokeWeight(20.0);
  stroke(255, 100);
}

void draw() {
  background(0);
  
  float dx = mouseX - x;
  float dy = mouseY - y;
  angle1 = atan2(dy, dx);  
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
 
  segment(x, y, angle1); 
  ellipse(x, y, 20, 20);
}

void segment(float x, float y, float a) {
  pushMatrix();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  popMatrix();
}
{% endhighlight %}

### C4
![](Follow1_C4.png)

You'll see here that the `Vector` class has many functions that are identical to Processing. The difference between these two examples is that we don't have calls to `pushMatrix()` and `popMatrix()`. Instead, we position the circle (which has the line embedded as a subview).

{% highlight swift lineos %}
override func setup() {
    let circle = Circle(center: Point(0,0), radius: 10)
    circle.strokeColor = C4Purple.colorWithAlpha(0.25)
    circle.lineWidth = 20.0

    let line = Line((Point(),Point(50,0)))
    line.opacity = 0.25
    line.anchorPoint = Point(0,0)
    line.lineWidth = 20
    line.center = circle.bounds.center

    circle.add(line)
    canvas.add(circle)

    var v = Vector()
    canvas.addPanGestureRecognizer { locations, center, translation, velocity, state in
        let vl = Vector(center)
        let dxdy = vl-v
        let Θ = dxdy.heading

        v = vl - Vector(x: cos(Θ) * 50, y: sin(Θ) * 50)

        ShapeLayer.disableActions = true
        circle.center = Point(v.x, v.y)
        line.rotation = Θ
    }
}
{% endhighlight %}

###Want to Contribute?
We'd love to have a bigger list of comparisons to other open-source projects. If you've created some comparison examples let us know and we can publish them here with you as the author.