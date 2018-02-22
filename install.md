---
layout: page
title: Install C4
description: This is where you install C4!
permalink: /install/
---

<div class="row">
	<div class="col-md-10 col-md-offset-1 text-center">
		<header class="post-header">
		  <h1 class="post-title">{{ page.title }}</h1>
			<p>Pick your weapon of choice and start kung-fu'ing some code.</p>
		</header>
		<hr>  
	</div>
</div>

<div class="row tutorial install">
	<div class="col-md-10 col-md-offset-1">
		<p>There are a few ways to install C4:</p>

		<div class="row">
			<div class="col-img">
				<a href="#jackie"><figure><img class="img-responsive" src="/images/install/01a.png"/><figcaption>Use the installer<br />(Jackie Chan)</figcaption></figure></a>
			</div>
			<div class="col-img">
				<a href="#jcvd"><figure><img class="img-responsive" src="/images/install/01b.png"/><figcaption>Use Cocoapods<br />(JCVD)</figcaption></figure></a>
			</div>
			<div class="col-img">
				<a href="#ong"><figure><img class="img-responsive" src="/images/install/01c.png"/><figcaption>Use Carthage<br />(Tony Jaa)</figcaption></figure></a>
			</div>
			<div class="col-img">
				<a href="#jet"><figure><img class="img-responsive" src="/images/install/01d.png"/><figcaption>Use Github for Mac<br />(Jet Li)</figcaption></figure></a>
			</div>
			<div class="col-img">
				<a href="#bruce"><figure><img class="img-responsive" src="/images/install/01e.png"/><figcaption>Use Git<br />(Bruce Lee)</figcaption></figure></a>
			</div>
		</div>

		<h2 id="jackie">Jackie Chan</h2>

		<p>The easiest way to create new projects is to install C4 directly into Xcode. I highly recommend this approach because it makes it extremely easy to quickly create new projects and test out your ideas. </p>

		<div class="download-block">
			<a href="http://www.c4ios.com/C4Installer_2_0_0.pkg"><img class="download" src="/images/install/02.png"/></a>
			<h3>C4 Installer</h3>
			<p>The latest stable C4 release.<br /><a href="http://www.c4ios.com/C4Installer_2_0_0.pkg">Download</a></p>
		</div>

		<ol>
			<li>Download the installer</li>
			<li>Double-click the .pkg to open it up</li>
			<li>Follow the instructions to install</li>
			<li>Open Xcode</li>
		</ol>

		<p>At this point, you’ll see a dialog that looks like this:</p>

		<figure><img src="/images/install/03.png" alt="Select: Create New Xcode Project"/><figcaption>Select: Create New Xcode Project</figcaption></figure>

		<ol>
			<li>Select “Create New Xcode Project</li>
			<li>Give your project a name</li>
			<li>Choose the device to build for</li>
			<li>Save the project somewhere</li>
			<li>When your project opens, choose the <code>WorkSpace.swift</code> file</li>
			<li>Hit <code>Run</code></li>
		</ol>

		<figure><img class="gfyitem install" data-id="DeadRegularAffenpinscher" /></figure>

		<p>That’s it! You’ve created a new C4 project.</p>

		<h3 id="jackie-pros">Pros</h3>

		<p>Like I mentioned above, I personally think this is the easiest way to test C4 projects. You can quickly create new projects, all the test media are included, and its an easy setup for copying and pasting any example code from our site straight into the <code>WorkSpace</code>. Furthermore, the code that installs is static so it should always work out of the box.</p>

		<h3 id="jackie-cons">Cons</h3>

		<p>The only significant drawback is that this installs a static copy of C4’s code base in every project you create. If there are updates to the core C4 project on Github this installer won’t update automagically. You’ll have to wait until we create a new installer build.</p>

		<h2 id="jcvd">JCVD</h2>

		<p>The next level of mastery is to use Cocoa Pods. You’ll have to do a few things to get this running:</p>

		<ol>
			<li><p>Install cocoa pods</p>

				<ol>
					<li>Create a new Xcode project (iOS: Single-View application)</li>
					<li>Close the Xcode project</li>
					<li>Open Terminal and navigate to the top level folder of your project. For example, you could write:<br/><code>cd /Users/Mac/Desktop/C4CocoaPod</code> </li>
					<li>Then, create a pod file by entering: <code>touch Podfile .</code></li>
					<li>Then, open the folder with the pod file: <code>open .</code></li>
					<li>Then add the following to the pod file:</li>
				</ol></li>
		</ol>

{% highlight plaintext %}
use_frameworks!

target 'TitleOfYourProject' do
  pod 'C4', '~> 3.0.1'
end
{% endhighlight %}

		<p>This is a little instruction that tells cocoa pods where to install things. </p>

		<p><strong>Remember to change the <code>TitleOfYourProject</code></strong>. I used <code>C4CocoaPod</code> as the title of mine.</p>

		<ol>
			<li>Back in Terminal, in the same directory, type: <code>pod install</code></li>
		</ol>

		<p>This is what my terminal output looks like at this point:</p>

{% highlight plaintext %}
Computer:~ SlantMacPro$ cd /Users/Computer/Desktop/C4CocoaPod 
Computer:C4CocoaPod SlantMacPro$ touch Podfile .
Computer:C4CocoaPod SlantMacPro$ open .
Computer:C4CocoaPod SlantMacPro$ pod install
Updating local specs repositories
Analyzing dependencies
Downloading dependencies
Installing C4 (1.0.2)
Generating Pods project
Integrating client project

[!] Please close any current Xcode sessions and use `C4CocoaPod.xcworkspace` for this project from now on.
Sending stats
Pod installation complete! There is 1 dependency from the Podfile and 1 total
pod installed.
S0106003ee1c0f960:C4CocoaPod SlantMacPro$ 
{% endhighlight %}

		<p>Now, we need to update the Xcode project so that it works with the pod’ed thing.</p>

		<ol>
			<li>Open the <code>.xcworkspace</code> project</li>
			<li>Open ViewController and change its contents to look like this:</li>
		</ol>

{% highlight swift linenos %}
import UIKit
import C4

class ViewController: CanvasController {
    override func setup() {
        canvas.backgroundColor = C4Blue
    }
}
{% endhighlight %}

		<ul class="list-unstyled">
			<li>3. Run it.</li>
		</ul>

		<p>Done.</p>

		<h3 id="jcvd-pros">Pros</h3>

		<p>Installing this way takes a bit more effort, but it guarantees that you always have the latest version of C4 that has been updated into the CocoaPod. Say, for instance, you make a project and then come back to it a couple weeks later (after we’ve updated) you can run <code>pod update</code> and it will bring everything up to speed.</p>

		<h3 id="jcvd-cons">Cons</h3>

		<p>You have to work with <code>.xcworkspaces</code>, which isn’t much of a problem. You might have some issues compiling the first time, but after getting things running a couple of times you’ll learn how to get past this. But, the main thing for me is that you’ll have to convert a normal Xcode project to use C4 every time… Which is slower than just creating a new project from a template.</p>

		<h2 id="ong">The Guy From Ong Bak</h2>

		<p>Carthage… The brutal, light, efficient weapon of choice for many developers. Carthage installs the bare minimum you need and, unlike Cocoapods, doesn’t create a workspace that has everything set up for you.</p>

		<p>This is how Alejandro teaches us to install via Carthage:</p>

		<ol>
			<li>Install Carthage</li>
			<li>Create Cartfile and in it paste github <code>"C4Labs/C4iOS&quot; ~&gt; 1.1.0</code></li>
			<li>Run <code>carthage update</code></li>
			<li>In your project reference the framework in Carthage/Build/iOS/C4.framework</li>
		</ol>

		<p>Installing C4 this way is like the trophy at the top of the tree in Ong Bak… Good luck.</p>

		<h3 id="ong-pros">Pros</h3>

		<p>Super light installer of the necessary C4 framework components.</p>

		<h3 id="ong-cons">Cons</h3>

		<p>More painful terminal experience. You have to do all the linking to the installed C4 framework yourself, from Xcode.</p>

		<h2 id="jet">Jet Li</h2>

		<p>Github for Mac. We host C4 on Github, so downloading their desktop application is one of the easiest ways of managing your projects. Through this tool you’ll be able to clone the C4 project onto your comp.</p>

		<ol>
			<li>Download Github for Mac</li>
			<li>Click the <a href="github-mac://openRepo/https://github.com/c4labs/C4iOS" title="Clone in Desktop">Clone in Desktop</a> link</li>
			<li>Open Xcode</li>
			<li>Create new Single-View application</li>
			<li>Right-click on <code>ViewController.swift</code></li>
			<li>Choose “Add files to “New”…”</li>
			<li>Navigate to your recently downloaded <code>C4iOS.xcodeproj</code> and choose it.<br/>
			<figure><img class="gfyitem install" data-id="DeadRegularAffenpinscher" /></figure>
			</li>
			<li>Embed the linked framework into your Xcode. In <code>General &gt; Embedded Binaries</code> click the <code>+</code> and add <code>C4.framework</code><br/><img class="gfyitem install" data-id="RapidBoldHogget" /></li>
			<li>Update the <code>ViewController</code> so it is a <code>CanvasController</code>… There will probably be a warning.<br/><img class="gfyitem install" data-id="WideeyedMedicalCollie" /></li>
			<li>Build the framework (for the simulator)<br/><img class="gfyitem install" data-id="BlueQuestionableJohndory" /></li>
			<li>In <code>setup()</code> change the background color to blue.<br/><img class="gfyitem install" data-id="ImpossibleAbleFlee" /></li>
			<li>Run the app (for the simulator)<br/><img class="gfyitem install" data-id="CheapPessimisticCanine" /></li>
		</ol>

		<h3 id="jet-pros">Pros</h3>

		<p>This way you’ll have a single copy of C4 on your computer, and through the Github app, you’ll be able to update that project at any time to keep it current. You’ll also be able to test any of the branches for the project. You’ll also be able to import the same project into ANY of the new Xcode projects you create. So, this approach gives you a nice way of keeping everything current, around a central project.</p>

		<h3 id="jet-cons">Cons</h3>

		<p>Takes much longer to set up a project. There are some git tricks that you cannot do with the Github app… It’s pretty decent, but there are some advanced techniques that I always have to fall back on Terminal to accomplish.</p>

		<h2 id="bruce">Bruce Lee</h2>

		<p>The martial arts master of keeping things up to date. Use Git, do everything from Terminal, fork, push, pull, rebase, etc. This one you’ll have to figure out on your own (for now).</p>

		<h5>Bwooooyaaaeeeaannnnn.</h5>

		<h3 id="bruce-pros">Pros</h3>

		<p>Ultimate control.</p>

		<h3 id="bruce-cons">Cons</h3>

		<p>Ultimate control.</p>
	</div>
</div>

<script>
 (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
  }(document, 'script'));
</script>