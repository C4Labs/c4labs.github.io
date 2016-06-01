---
layout: page
title: 'C4 Examples | c4ios.com'
description: 'C4 Examples'
---

# Examples

<div class="row">
	<div class="col-md-12 col-sm-12 col-xs-12">
		<h2>These short examples introduce a breadth of techniques, concepts and tricks that will get you primed for making amazing things with C4.</h2>
	</div>
</div>

<div class="row examples-index">
	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "shapes" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "views" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "math" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "color" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}
</div>

<div class="row examples-index">
	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "images" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "filters" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "movies" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}
</div>

<div class="row examples-index">
	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "audio" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "gradients" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "fonts" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

</div>

<div class="row examples-index">
	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "interaction" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}

	{% assign sorted_cats = site.categories | sort %}
	{% for category in sorted_cats %}
		{% assign sorted_posts = category[1] | sort %}
		{% if category[0] == "advanced" %}
			<div class="col-md-4 col-sm-12 col-xs-12">
				<h2 id="{{category[0] | uri_escape | downcase }}">{{ category[0] | capitalize }}</h2>
				<ul class="list-unstyled">
				  {% for post in sorted_posts %} 
				 	<li>
				 		<a href="{{  post.url }}"><span class="blue">{{  post.title }}</span><br />{{ post.description }}</a>
				 	</li>
				 	{% endfor %}
				</ul>
			</div>
		{% endif %}
	{% endfor %}
</div>