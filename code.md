---
layout: page
title: Code
permalink: /code/
background: '/images/2019-04-23 15-26-16-0.JPG'
---
<ul>
  {% for project in site.code %}
    <li>
      <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
      <p>{{ project.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>