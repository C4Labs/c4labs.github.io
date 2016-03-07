---
layout: page
title: 'Basics'
categories: cosmos, tutorials
description: 'Here be tutorials'
---

# Tutorials

<div class="row" style="margin-top: 48px;">
	<div class="col-xs-12 col-md-12">
		<ul class="examples-list list-unstyled">
			{% assign tutorialsPosts = site.categories['tutorials'] %}
			{% for post in tutorialsPosts %}
			  <li>
			  	<a href="{{ post.url }}">
			  		<div>
			  			<span class="img">
				  			<img src="{{ site.baseurl }}/images/tutorials/{{ post.url | split: '/' | last }}/{{ post.image }}" />
				  		</span>
				  		<div class="text">
					  		<p class="title">{{ post.title }}</p>
					  		<p>{{ post.description }}</p>
					  	</text>
				  	</div>
				  </a>
			  </li>
			{% endfor %}
		</ul>
	</div>
</div>
