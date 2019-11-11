---
layout: page
title: Presentations
permalink: /presentations/
background: '/images/2019-04-21 08-47-35-0.JPG'
---
<ul>
  {% for talk in site.presentations %}
    <li>
      <h2><a href="{{ talk.url }}">{{ talk.title }}</a></h2>
      <h3>{{ talk.day }}</h3>
      <p>{{ talk.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>