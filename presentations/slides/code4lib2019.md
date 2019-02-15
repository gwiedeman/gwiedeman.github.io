---
title: Describing Web Archives with the Partner Data API
revealOptions:
    transition: 'fade'
---
<style>
#fLeft {float: left; max-width: 60%; text-align: left;}
#fRight {float: right; max-width: 40%; text-align: left;}
#fRight img {margin: 20px;}
#smallLink {font-size: 18px;}
.whitebg {background-color: #fff; margin-top: 30% !important; padding: 15px !important; border-radius: 15px;}
.altText {background-color: #fff; bottom: 30px; position: fixed; padding: 15px !important; border-radius: 5px;}
</style>

### Providing Computational Access to Records of American Capital Punishment
<br/>
##### Gregory Wiedeman
##### University Archivist
##### University at Albany, SUNY
##### <img alt="Twitter logo" src="img-saa16/twitter.png" style="margin: -5px; background: none; border: none; box-shadow: none;" width="45px" /> @GregWiedeman


---

### National Death Penalty Archive

<div id="fLeft">
UAlbany collects records from researchers, writers, and activists related to capital punishment in the United States as part of the <a href="https://archives.albany.edu/static/91.html">National Death Penalty Archive</a>.
</div>
<div id="fRight">
<img alt="Image of Death penalty moratorium walk held my Floridians for Alternatives to the Death Penalty" src="http://library.albany.edu/sites/all/themes/New_UArchives/img/700/ndpa700.jpg"/>
</div>

---

<div id="fLeft">
Watt Espy Papers: The most complete set of extant records of American executions.
<ul>
<br/>
<li>24,036 sides of index cards</li>
<li>A 101,566 pages of reference materials
<ul>
<li>Copies of Correctional Records</li>
<li>Copies of newspapers and published sources</li>
<li>Written notes</li>
</ul>
</li>
</ul>
</div>
<div id="fRight">
	<img alt="Image of correctional record for Jerry Coleman from the Watt Espy Papers" src="img/B35_F011_000067.jpg"/>
</div>

---

<!-- .slide: data-background="https://library.albany.edu/sites/all/themes/New_UArchives/img/1900/ndpa1.jpg" alt="Test" -->

<p class="altText">Image of Index card summaries of executions.</p>

---

### The ESPY File

* <a href="https://www.icpsr.umich.edu/icpsrweb/NACJD/studies/8451/summary">NSF-funded project</a> in 1984 to create a dataset from the collection.
    * "The most often cited and used list of America’s legal executions"
* Researchers have traveled to view discrepancies with the source material
* Paul H. Blackman and Vance McLaughlin, <a href="https://doi.org/10.1177/1088767911418054">The Espy File on American Executions: User Beware</a> (2011)

---

#### Computational Analysis and the Death Penalty

* <i>Furman v. Georgia</i> (1972)
* <i>Gregg v. Georgia</i>, etc. (1976)
* Marvin Wolfgang and Marc Riedel Study (1973) and <i>Maxwell v. Bishop</i>
* David Baldus-led Georgia Study
* <i>McCleskey v. Kemp </i> (1987)
	* Found "racially disproportionate impact"
	* invalidated statistical analysis for 14th amendment claims
* <i>Miller-El v. Dretke</i> (2005)
    * Utilized statistical analysis for <i>Batson</i> challenge

---

### <a href="http://registry.clir.org/projects/23081088">The Digital Archive of Executions in the United States, 1608-2002</a>
<div style="margin: 30px;">
<ul>
<li>CLIR-funded digitization project</li>
<li>Provide context to data points</li>
<li>API access to underlying data</li>
</ul>
</div>


<div id="fLeft">
<img alt="Arclight logo" src="img/arclight_logo.png" style="margin: -5px; background-color: #000; border: none; box-shadow: none; width: 300px" />
</div>
<div id="fRight">
<img alt="Hyrax logo" src="img/hyrax_logo.png" style="margin: -5px; background: none; border: none; box-shadow: none;" width="300px" />
</div>

---

### The "We"

* 3 archivists
    * Mark Wolfe
    * Melissa McMullen
    * me
* Partial support from Library Systems Staff
    * Department Head
    * Systems Administrator
    * Web Developer
    * Database Administrator

---

### Espy Metadata Creation Tool

* Samvera and Hyrax is Rails application
* "Ramp up" plan for repository implementation and maintenance
* Makes connections between 4 difference sources
	* Small Index Cards
	* Large Index Cards
	* Reference Material
	* Espy File data
* Create new Espy Records backed by Data Model
* Make the computer do the boring work
* Focus on intellectual process of metadata creation

---

<!-- .slide: data-background="img/espy1.png" -->

---

<!-- .slide: data-background="img/espy3.png" -->

---

<div id="fLeft">
<h4>Metadata Matters</h4>
<ul>
<li>Espy File data demonstrated creators’ 
priorities, values, and mental framing 
that are inappropriate or conflict with 
our own</li>
<li>Occupation:
<ul>
<li>"Student"</li>
<li>"Banana Dealer"</li>
<li>"Beef Carrier"</li>
<li>"Goat Herder"</li>
<li>"Tiecutter"</li>
<li>"Tourist"</li>
</ul>
</li>
</ul>
</div>
<div id="fRight">
	<img src="img/codebook.png"/>
</div>

---

<div id="fLeft">
<h4>Metadata Matters</h4>
<ul>
<li>Occupation:
<ul>
<li>"Armed robber"</li>
<li>"Asylum Escapee"</li>
<li>"Bandit"</li>
<li>"Criminal"</li>
<li>"Cult Leader"</li>
<li>"Gang Member"</li>
<li>"Lunatic"</li>
<li>"Male Nurse"</li>
<li>"Retarded"</li>
<li>"Slave"</li>
</ul>
</li>
</ul>
</div>
<div id="fRight">
	<img src="img/codebook.png"/>
</div>

---

### Metadata Matters

* "Crime Committed" changed to "Crime Convicted"
* Race does not conform to an established standard
* General Data Improvements
	* Added Date of Conviction to Date of Execution
	* ISO dates
	* First and last name in individual fields
	* Sex to become gender assigned
	* Feedback welcome!

---

### "Unconfirmed cases

* over 5,000 records added
    * Documented and underdocumented
    
    
---

### Linked Data Problems

* Hard to find vocabularies with sufficient precision
* Create one?
	* Access to expertise, School of Criminal Justice, Advisory Board
* Issues with digital archival objects as well
* Archives may have a fundamental mission conflict with linked data
	* Archival description manages objects with minimal metadata
	* Archives offer information in context, not objective/verifiable data

---

<img src="img/enslavedWoman1.png"/>

---

<div id="fLeft">
<img src="img/B19_F006_000008.jpg"/>
</div>
<div id="fRight">
<img src="img/B19_F006_000009.jpg"/>
</div>


---

<!-- .slide: data-background="img/c4l-arclight1.png" -->

---

<!-- .slide: data-background="img/c4l-arclight2.png" -->

---

<!-- .slide: data-background="img/c4l-arclight3.png" -->

---

<!-- .slide: data-background="img/arclight3.png" -->

---

<!-- .slide: data-background="img/c4l-hyrax1.png" -->

---

### Providing Computational Access to Records of American Capital Punishment
<br/>
##### Gregory Wiedeman
##### University Archivist
##### University at Albany, SUNY
##### <img alt="Twitter logo" src="img-saa16/twitter.png" style="margin: -5px; background: none; border: none; box-shadow: none;" width="45px" /> @GregWiedeman
