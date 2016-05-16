---
layout: page
title: 'C4 Examples | c4ios.com'
description: 'C4 Examples'
---

# Examples

<div class="row">
	<ul class="col-md-12 col-sm-12 col-xs-12 examples-block list-unstyled">
		{% assign examplesPosts = site.categories['examples'] %}
			<h2>Here are short examples that highlight the properties and techniques that are important for working with C4.</h2>
			
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