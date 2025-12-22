---
layout: page-wide
title: Code
permalink: /code/
background: '/assets/images/2019-04-23 15-26-16-0.JPG'
---

<div class="card-columns">

    {% for project in site.code %}
    <a href="{{ project.link }}"><div class="card text-white card-primary mb-3" style="width: 18rem;">
	  <div class="card-body">
	    <h2 class="h5 card-title">{{ project.title }}</h2>
	    <h3 class="h6 card-subtitle mb-2">{{ project.code }}</h3>
	    <p class="card-text">{{ project.content | remove: '<p>' | remove: '</p>' }}</p>
	  </div>
	</div>
	</a>
	{% endfor %}

</div>