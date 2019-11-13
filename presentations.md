---
layout: page
title: Presentations
permalink: /presentations/
background: '/images/2019-04-21 08-47-35-0.JPG'
---
<ul>
  {% assign ider = "2050" %}
  {% assign sorted = site.presentations | sort: 'date' | reverse %}
  {% for talk in sorted %}
    {% assign year = talk.date | date: "%Y" %}
  	{% if year contains ider %}
  	{% else %}
    	{% assign ider = year %}
    	<div class="pb-2 mt-4 mb-2 border-bottom">
	      <h3>{{ ider }}</h3>
		</div>
    {% endif %}
    <li>
      <h3><a href="{{ talk.url }}">{{ talk.title }}</a></h3>
      <h5>
      	{{ talk.date | date: "%Y %B %-d" }}
      	<i class="fa fa-cube" aria-hidden="true" style="margin: 0px 15px;"></i>  
 		<i>{{ talk.event }}</i>
 	  </h5>
      <p>{{ talk.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>