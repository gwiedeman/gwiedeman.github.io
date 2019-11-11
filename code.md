---
layout: page
title: Code
permalink: /code/
background: '/images/2019-04-25 12-38-31-0.JPG'
---
<ul>
  {% for project in site.code %}
    <li>
      <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
      <p>{{ project.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>