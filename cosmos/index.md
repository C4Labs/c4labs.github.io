---
layout: cosmos
title:  'Learn to build COSMOS'
categories: cosmos, tutorials
---
<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12">
		<h1 class="breadcrumb"><a href="/tutorials">Tutorials</a><div class="bread-caret">></div>COSMOS</h1>
	</div>
</div>

<div class="row intro">
	<div class="col-xs-12 col-md-6">
		<h2>Learn by doing with our C4-powered app-building tutorial. Let us walk you through the process of how we built a nice little iOS app called COSMOS.</h2>
		<div class="note blue">
			<p>Note: If you want to jump straight into writing code, head to <a href="#">Chapter 4 – Infinite Scrollview</a>.</p>
		</div>
	</div>
	<div class="col-xs-12 col-md-6">
		<img class="img-responsive teaser" src="{{ site.baseurl }}/images/cosmos/cosmosPoster.png" alt="COSMOS" />
	</div>
</div>

<div class="row">
	<div class="col-xs-12 col-md-12">
		<hr />
	</div>
</div>

<div class="row">
	<div class="col-xs-12 col-md-12">
		<ul class="examples-list list-unstyled">
			{% assign cosmosPosts = site.categories['cosmos'] | sort: 'order' %}
			{% for post in cosmosPosts %}
			  <li>
			  	<a href="{{ post.url }}">
			  		<div>
			  			<span class="img">
				  			<img src="{{ site.baseurl }}/images/cosmos/{{ post.chapter }}/{{ post.image }}" />
				  		</span>
				  		<div class="text">
					  		<p class="title">Chapter {{ post.chapter }}<br />{{ post.title }}</p>
					  		<p>{{ post.description }}</p>
					  	</div>
				  	</div>
				  </a>
			  </li>
			{% endfor %}
		</ul>
	</div>
</div>