---
layout: page
title: 'C4 Examples | c4ios.com'
description: 'C4 Examples'
---

# Examples

<div class="row">
	<ul class="col-md-12 col-sm-12 col-xs-12 examples-block list-unstyled">
		{% assign examplesPosts = site.categories['examples'] %}
			<h2>The examples page is coming soon, bear with us and thanks for your patience!</h2>
			<h3>We've got a ton of examples to write up and get online, rest assured we'll start putting them online ASAP.</h3>
			<p>– C4 team</p>
			
			<!-- UNCOMMENT WHEN EXAMPLES READY -->
			{% for post in examplesPosts %}
			  <li class="examples-index">
			  	<a href="{{ post.url }}">
			  		<div>
				  		<div class="text">
					  		<p class="title">{{ post.title }}</p>
					  		<p>{{ post.description }}</p>
					  	</div>
				  	</div>
				  </a>
			  </li>
			{% endfor %}
			
	</ul>
</div>

