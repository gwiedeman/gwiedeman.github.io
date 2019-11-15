---
layout: page-wide
title: Presentations
permalink: /presentations/
background: '/assets/images/2019-04-21 08-47-35-0.JPG'
---
<dl class="row">
  {% assign ider = "2050" %}
  {% assign sorted = site.presentations | sort: 'date' | reverse %}
  {% for talk in sorted %}
    {% assign year = talk.date | date: "%Y" %}
  	{% if year contains ider %}
    <dt class="col-sm-3"></dt>
  	{% else %}
    	{% assign ider = year %}
      <dt class="col-sm-3"><a id="{{ ider }}"><h3>{{ ider }}</h3></a></dt>
    {% endif %}
     <dd class="col-sm-9">
      <h3><a href="{{ talk.url }}">{{ talk.title }}</a></h3>
      <h5>
        {{ talk.date | date: "%Y %B %-d" }}
        <i class="fa fa-cube" aria-hidden="true" style="margin: 0px 15px;"></i>  
        <i>{{ talk.event }}</i>
      </h5>
      <p>
        {% if talk.abstract %}
          {{ talk.abstract | strip_html | truncatewords: 35 }}
        {% else %}
          {{ talk.content | strip_html | truncatewords: 35 }}
        {% endif %}
      </p>
    </dd>
  {% endfor %}
</dl>