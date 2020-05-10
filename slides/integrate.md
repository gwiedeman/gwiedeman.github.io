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
</style>

## Integrating ArchivesSpace and ArcLight

[gregwiedeman.com/slides/integrate.html](https://gregwiedeman.com/slides/aspaceIntergrations.html)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY

---

### Integrating ASpace and ArcLight

* Why we're using ASpace and ArcLight
* What does it look like?
* How the connections work
* The bigger picture

---

### Why use ASpace and ArcLight

<div id="fLeft">
<ul>
<li>Archives usability is poor</li>
<li>Multiple points of discovery</li>
<li>Need experimentation, iteration</li>
</ul>
</div>
<div id="fRight">
<video width="100%" height="100%" autoplay controls>
  <source src="scroll.webm" type="video/webm">
</video>
</div>

---

### Things to try!

* Use archival description for discovery of online content
	* Digitized material
	* Born-digital
	* Without item-level description
* A single point of discovery

---

### Why not ASpace PUI?

* Complex for development
* Includes both Archivist and User functionality
* Customizations often affect other functions
* ASpace is great for data intergration, but challenging to intergrate user experience with other systems

---

### Integrations Principles

* Boilerplate implementations
* Separation of concerns
	* Do one thing
* Networks of open systems

---

### Why ArcLight

* Does one thing
	* Only presents Solr data
	* Public-data only
* Built for archival principles
* Familiar technology
* Open API is useful

---

### How do the connections work?

<img src="https://raw.githubusercontent.com/UAlbanyArchives/ArchivesSpace-ArcLight-Workflow/master/img/overnightScripts.png" />

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

* [Resource in ASpace](https://aspace.library.albany.edu/resources/390)
* [Collection in ArcLight](https://archives.albany.edu/description/catalog/ua200)
	* Individual levels
	* Blacklight features like facets
* [Single point of discovery](https://archives.albany.edu/)
* [DAO in ASpace](https://aspace.library.albany.edu/digital_objects/20032)
* [Digital Object in Hyrax](https://archives.albany.edu/concern/daos/6d56zx17z)
* Two-way client-side integration
 
---

### Digital Object Upload


* Upload a [Commencement Program](https://archives.albany.edu/description/catalog/ua935)
* [Documentation](https://wiki.albany.edu/display/SCA/Uploading+Digital+Objects+to+Hyrax)

---

### Limitations

* Takes some customization
* Hyrax, and all repositories are challenging
* Usability Issues

---

### Usability Issues

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

---

### The Bigger Picture

* We need a discovery system for digital objects based on archival principles
	* Description for discovery
	* Object for discovery, description for context
	* Single experience, multiple systems

<img src="img/integrateContext.png" />

---

###  [Integrating ArchivesSpace and ArcLight](gregwiedeman.com/slides/aspaceIntergrations.html)

* [Single Point of Discovery](https://archives.albany.edu)
* [ArcLight](https://archives.albany.edu/description/)
* [Hyrax](https://archives.albany.edu/catalog)
* [Documentation Site](https://wiki.albany.edu/pages/viewpage.action?pageId=80544001)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY
