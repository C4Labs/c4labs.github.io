---
layout: tutorial-index
title: 'Tutorials'
categories: cosmos, tutorials
description: 'Check out in-depth tutorials for C4'
---

# Tutorials

<div class="row">
	<ul class="col-md-12 col-sm-12 col-xs-12 examples-block list-unstyled">
		{% assign tutorialsPosts = site.categories['tutorials'] %}
		{% for post in tutorialsPosts %}
		  <li class="text-center">
		  	<div class="wrapper">
			  	<a href="{{ post.url }}">
			  		<div>
			  			<span class="img">
				  			<img src="{{ site.baseurl }}/images/tutorials/{{ post.url | split: '/' | last }}/{{ post.image }}" class="img-responsive" />
				  		</span>
				  		<div class="text">
					  		<p class="title">{{ post.title }}</p>
					  		<p>{{ post.description }}</p>
					  		<p class="author">By {{ post.author }}</p>
					  	</div>
				  	</div>
				  </a>
				</div>
		  </li>
		{% endfor %}
	</ul>
</div>