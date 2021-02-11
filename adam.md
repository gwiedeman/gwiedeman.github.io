---
layout: nomenu
title: Adam
permalink: /adam/
background: '/assets/images/IMG_9834.JPG'
---

<meta name="robots" content="noindex">

<h2>Adam Gift Ideas</h2>

<ul>
	<li>Books</li>
	<li>Adam does not have many outdoor toys for the warmer months.</li>
	<li>You can give to Adam's 529 College account using <a href="https://www.ugift529.com">UGift</a>. You just need to enter his code: K3D-38M</li>
</ul>

<h2>Adam's Books</h2>
<p>Adam particularly enjoys rhyming books, like <i>The Little Blue Truck</i> and <i>Pout-Pout Fish</i> books. Here is a list of books Adam already has:</p>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
  <tbody>
  	{% assign sorted = site.data.adamBooks | sort: 'author' %}
	{% for book in sorted %}
		<tr>
	      <td>{{ book.title }}</td>
	      <td>{{ book.author }}</td>
    	</tr>
	{% endfor %}
  </tbody>
</table>