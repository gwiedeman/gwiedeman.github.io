---
title: Integrating ArchivesSpace and ArcLight
revealOptions:
    transition: 'fade'
---
<style>
#fLeft {float: left; max-width: 50%;}
#fRight {float: right; max-width: 50%;}
#smallLink {font-size: 18px;}
.whitebg {background-color: #fff; margin-top: 30% !important; padding: 15px !important; border-radius: 15px;}
.reveal section img {border: none;}
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
	font-family: "Montserrat", Roboto , sans-serif;
	text-transform: initial;
	font-weight: bold;
}
.wrap{
position:relative;
  height:30vh;
  border-left:15px solid #000;
  padding:5vh 20px;
}
.arrow {
  position:absolute;
  left:-43px;
  width: 70px;
  bottom: -20px;
}
.up{top:-20px;}
</style>

## Integrating ArchivesSpace and ArcLight

[gregwiedeman.com/slides/integrate.html](https://gregwiedeman.com/slides/integrate.html)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY


---

### Why use ASpace and ArcLight

<div id="fLeft">
<ul>
<li>Archives usability is poor</li>
<li>Need experimentation, iteration</li>
<li>Repository implementation</li>
</ul>
</div>
<div id="fRight">
<video width="100%" height="100%" autoplay controls>
  <source src="scroll.webm" type="video/webm">
</video>
</div>

---

### Things to try!

* A single point of discovery
* Use archival description for discovery of online content
	* Digitized material
	* Born-digital
	* Without item-level description

---

### The Bigger Picture

<div id="fLeft">
<div class="wrap">
  <svg class="arrow down" viewbox="0 0 7 10">
    <path d="M3.5 10 L7 0 Q3.5 3 0 0z"/>
  </svg>
</div>
</div>
<div style="float:left">
	<ul>
	<li>Collection Context</li>
		<ul>
			<li>Series Context</li>
				<ul>
					<li>File record</li>
					<ul>
						<li>Digital object</li>
						<ul>
							<li>Automated metadata</li>
							<li>OCR</li>
							<li>Timestamps</li>
							<li>Extracted entities</li>
						</ul>
					</ul>
				</ul>
		</ul>
	</ul>
</div>
<div id="fRight">
<div class="wrap">
  <svg class="arrow up" viewbox="0 0 7 10">
    <path d="M3.5 0 L7 10 Q3.5 7 0 10z"/>
  </svg>
</div>
</div>

---

### Why not ASpace PUI?

* Complex for development
* Includes both Archivist and User functionality
* Customizations often affect other functions
* ASpace is great for data intergration, but challenging to intergrate user experience with other systems

---

### Integrations Principles

* Separation of concerns
	* Do one thing
* Boilerplate implementations
	* Try to keep integeration outside of systems
* Networks of open systems

---

### Why ArcLight

<div id="fLeft">
<ul>
<li>Does one thing</li>
	<ul>
	<li>presents Solr data</li>
	<li>Public-data only</li>
	</ul>
<li>Built for aggregate description</li>
<li>Familiar technology</li>
<li>Open API is useful</li>
</ul>
</div>
<div id="fRight">
	<a href="https://archives.albany.edu/description/catalog/apap298"><img src="img/arclight.png" alt="Screenshot of ArcLight." /></a>

</div>


---

### How do the connections work?

<img src="https://raw.githubusercontent.com/UAlbanyArchives/ArchivesSpace-ArcLight-Workflow/master/img/overnightScripts.png" alt="Diagram showing how ArchivesSpace connects to ArcLight and Hyrax." />

---

### How do the connections work?

* [ASpace-ArcLight workflow](https://github.com/UAlbanyArchives/ArchivesSpace-ArcLight-Workflow)
	* Overnight or manual EAD export
	* Uses ArchivesSnake!
	* Index shell script
	* [Documentation](https://wiki.albany.edu/display/SCA/Overnight+Export+and+Indexing+Scripts)
* [Collections Github repo](https://github.com/UAlbanyArchives/collections)

---

### What does this look like?

* Resource in ASpace
* [Collection in ArcLight](https://archives.albany.edu/description/catalog/ua200)
	* Individual levels
	* Blacklight features like facets
* [Single point of discovery](https://archives.albany.edu/)
* DAO in ASpace
* [Digital Object in Hyrax](https://archives.albany.edu/concern/daos/6d56zx17z)
* Two-way client-side integration
 
---

### Digital Object Upload

* Upload a [Commencement Program](https://archives.albany.edu/description/catalog/ua935)
* [Documentation](https://wiki.albany.edu/display/SCA/Uploading+Digital+Objects+to+Hyrax)


---

### Limitations

<video width="100%" height="100%" autoplay controls>
  <source src="scroll.webm" type="video/webm">
</video>
---

### Usability Issues

* [Tabs! Context! Loops!](https://archives.albany.edu/description/catalog/ua500)
* [Collections/Digital Selections](https://archives.albany.edu/search/)
* [UAlbany ArcLight Update and Outlook](https://gregwiedeman.com/2018/11/19/arclight-update.html)
* [UAlbany ArcLight Usability Analysis](https://docs.google.com/document/d/1etPr-b1B13nwuDa0eXgKrYXFAzZ5vvYJ_NS7VmbrBxI/edit)
* Addressed during [ArcLight Phase II work cycle](https://library.stanford.edu/blogs/digital-library-blog/2017/06/arclight-mvp-work-cycle-completed)
* [UM Bentley Feedback](https://docs.google.com/document/d/1HN5CLUFuFJ1m37KgFQ2w3LBZbuz5E0YzRE3_v42_nIg)
* Could add new design features to ASpace PUI


---

###  Integrating ArchivesSpace and ArcLight

* [Single Point of Discovery](https://archives.albany.edu)
* [ArcLight](https://archives.albany.edu/description/)
* [Hyrax](https://archives.albany.edu/catalog)
* [Documentation Site](https://wiki.albany.edu/pages/viewpage.action?pageId=80544001)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY
