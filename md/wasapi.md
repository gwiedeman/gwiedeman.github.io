<style>
.bitLink {background-color: #e5e5e5; border-radius: 5px; padding: 10px; color: #000000; float: right; width:235px; font-size: 23px !important; top:0;}
</style>

##Automating Web Archives Records in ASpace

#### A Sustainable, Large-Scale, Minimal Approach
<br/>
#####Gregory Wiedeman
#####University Archivist
#####University at Albany, SUNY

http://gregwiedeman.com/presentations/slides/webArchivesinASpace.html

---

## Web Archiving at UAlbany

* UAlbany Web Archiving program with Archive-It since 2013
* Mission of preserving permanent public records available only online
* No real public access or use
* Became my responsibility in 2015

* Began outside collecting in 2016
* New York State politics, labor, capital punishment
* Current ArchivesSpace migration ETA March 2017

---

## Web collections have paper equivalents

* Bound Course Bulletins, 1845-2014

<img src="img-saa16/history-course-cat.png"/>

---

## Records that need to be discoverable

<img src="img-saa16/history-404.png"/>

---

## Manage Web Archives Records in ASpace

* Intergration with traditional collections
	* Arrange and describe online archival records in ASpace, just like paper
	* Arrangement by use and content, not format
* Automate description and access
	* Use ASpace and Archive-It APIs to update extents, dates, and links
* Same, format-neutral access system

---

## Arrange and Describe in ASpace


* Any archival object can be from web archives!
* Resource must have a phystech note with content "Web Archives"
* Archival object and all parent objects must be Other Level, Web Archives
* Two external documents notes
	* Status: active, initial, or inactive
	* URL: www.albany.edu/senate

<p width="100%" style="text-align: left;font-size: 35px;"><img src="img-saa16/github.png" style="margin: 0px; background: none; border: none;" width="30px"/> https://github.com/UAlbanyArchives/ASpace_WebArchives</p>
	
---

### Resource needs <phystech> note

<img src="img-ss/phystech.png"/>

---

### Archival Object level Web Archives

<img src="img-ss/otherLevel.png"/>

---

### Two external document notes

<img src="img-ss/externalDocs.png"/>

---

## Internet Archive and Archive-It CDX API

* CDX servers used for Wayback Machine
	* for each capture:
		* timestamp
		* WARC reference
		* mime type
		* http response
		* hash
* http://wayback.archive-it.org/3308/timemap/cdx?url=http://www.albany.edu/undergraduate_bulletin/
* https://web.archive.org/cdx/search/cdx?url=http://www.albany.edu/undergraduate_bulletin/

---

## Let the computer do the work

<img class="centerAlign" style="text-align:center;" src="img-saa16/ASpace-dfd.png"/>

<p width="100%" style="text-align: left;font-size: 35px;"><img src="img-saa16/github.png" style="margin: 0px; background: none; border: none;" width="30px"/> https://github.com/UAlbanyArchives/ASpace_WebArchives</p>

---

## webArchives.py

~~~~
python webArchives.py
Looking for Web Archives Records in M.E. Grenander Department of Special Collections & Archives
Requesting resource results page 1 of 1
found Web Archives in resource ---> The Pride Center of the Capital Region Records
        Updating record for The Pride Center of the Capital Region Website, 2011-02-03 - 2016-10-07
                Updating resource...
                Updating digital objects...
                Posting updated archival object back to ASpace...
found and updated 1 web archives resource in 38 total resources.
~~~~

<p width="100%" style="text-align: left;font-size: 35px;"><img src="img-saa16/github.png" style="margin: 0px; background: none; border: none;" width="30px"/> https://github.com/UAlbanyArchives/ASpace_WebArchives</p>

---

## Describing Web Archives

* Web Archives as containers
	* Series 1: Web Archives --> Series 1: Website of the Office of the Provost
	* Record is what matters not the format
	* Need to maintain provenance information and make it available
	* Need better ways to store technical information in ArchivesSpace

---

<h3>Access</h3>
<ul>
	<li class="fragment">Archives public access systems are terrible</li>
	<li class="fragment">Implemented new public access system in January 2017</li>
	<ul class="fragment">
		<li>Drupal, XTF, Static Page Generation</li>
		<li>Bootstrap 3</li>
		<li><a href="http://library.albany.edu/archive">http://library.albany.edu/archive</a></li>
	</ul>
</ul>

---

##Automating Web Archives Records in ASpace

#### A Sustainable, Large-Scale, Minimal Approach
<br/>
#####Gregory Wiedeman
#####University Archivist
#####University at Albany, SUNY

http://gregwiedeman.com/presentations/slides/webArchivesinASpace.html

---

<section data-background-image="img-saa16/webArch1.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch2.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch3.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch4.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch5.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch6.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch7.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch8.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch9.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch10.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch11.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>
<section data-background-image="img-saa16/webArch4.png"><p class="bitLink">http://bit.ly/2ajx4Ow</p></section>