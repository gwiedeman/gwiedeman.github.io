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
</style>

## Integrating ArchivesSpace and ArcLight

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY

---

### Integrating ASpace and ArcLight

* Why we're using ASpace and ArcLight
	* Usability experimentation
	* Intergrations principles
	* 
* What does it look like?
	* 
* How the connections work
	* Technical details
* The bigger picture
	* What does archival discovery look like?

---

## Why we're using ASpace and ArcLight

<div id="fLeft">
<ul>
<li>Archives usability is bad</li>
<li>Single point of discovery</li>
<li>Need experimentation, iteration</li>
</ul>
</div>
<div id="fRight">
<video width="100%" height="100%" autoplay controls>
  <source src="scroll.webm" type="video/webm">
</video>
</div>

---

### Integrations Principles

* Boilerplate implementations
* Separation of concerns
	* Do one thing
* Networks of open systems

---

### Why not ASpace PUI?

* Complexity for development
* Includes both Archivist and User functionality
* Customizations often affect other functions
* Harder to intergrate user experience with other systems

---

### Why ArcLight

* Public-data only
* Only presents Solr data
* Open API useful
* Familiar technology

---

## What does this look like?

* [Resource in ASpace](https://aspace.library.albany.edu/resources/390)
* [Collection in ArcLight](https://archives.albany.edu/description/catalog/ua200)
* Digital Object in Hyrax

---

## How do the connections work?

* Overnight or manual EAD export
* Index shell script
* Hyrax upload?

---

## Next steps

* Moar ArchivesSnake
* Indexing from OAI feed?

---

### The Bigger Picture

* We need a discovery system for digital objects based on archival principles
	* Description for discovery
	* Object for discovery, description for context
* Might not be a single system

---

## Integrating ArchivesSpace and ArcLight

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY