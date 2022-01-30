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
	    <h5 class="card-title">{{ project.title }}</h5>
	    <h6 class="card-subtitle mb-2 text-dark">{{ project.code }}</h6>
	    <p class="card-text">{{ project.content | remove: '<p>' | remove: '</p>' }}</p>
	  </div>
	</div>
	</a>
	{% endfor %}

</div>