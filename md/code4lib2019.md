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
section {height:100%}
.pullDown {height:auto}
</style>

### Providing Computational Access to Records of American Capital Punishment
<br/>
##### Gregory Wiedeman
##### University Archivist
##### University at Albany, SUNY
##### <img alt="Twitter logo" src="img-saa16/twitter.png" style="margin: -5px; background: none; border: none; box-shadow: none;" width="45px" /> @GregWiedeman
##### Code4Lib 2019

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
<h3>Watt Espy Papers</h3>
The most complete set of extant records of American executions.
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
<img alt="CLIR Logo" src="img/clir.png" />
</div>
<div id="fRight">
<img alt="ArcLight logo" src="img/arclight_logo.png" style="margin: -5px; background-color: #000; border: none; box-shadow: none; width: 300px" />
<img alt="Hyrax logo" src="img/hyrax_logo.png" style="margin: -5px; background: none; border: none; box-shadow: none;" width="300px" />
</div>

---

### The "We"

<div id="fLeft">
<ul>
<li>3 archivists</li>
	<ul>
		<li>Mark Wolfe</li>
		<li>Melissa McMullen</li>
		<li>Me</li>
	</ul>
</ul>
<ul>
<li>Graduate Student Assistants</li>
	<ul>
		<li>Amanda Partridge</li>
		<li>Sheri Sarnoff</li>
		<li>Miles Lawlor</li>
	</ul>
</ul>
</div>
<div id="fRight">
<ul>
<li>Library Systems Staff (partial support)</li>
	<ul>
		<li>Department Head</li>
		<li>Systems Administrator</li>
		<li>Web Developer</li>
		<li>Database Administrator</li>
	</ul>
</ul>
</div>
	
---

### Supporting Open-Source at UAlbany

* Systems and University staff had experience with enterprise systems
* On-site virtualized data center
* CLIR Grant demonstrated the value of the work we could do with more technology
* Archivists and Systems staff learned together collaboratively
	* Archivists took hands-on role with Rails, adapting and configuring systems
* Sustainability a work in progress
* Dependent on maintainers and open source community

---

### Espy Metadata Creation Tool

* Samvera and Hyrax are Rails applications
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

<p class="altText">Screenshot of metadata creation tool to link records with redis autocomplete.</p>

---

<!-- .slide: data-background="img/espy3.png" -->

<p class="altText">Screenshot of metadata creation tool displaying three types of source material.</p>

---

<img style="width:50%;" alt="Records from newspaper listing hundreds of executions. This was still very challenging to link to hundreds on individual records, no matter what we tried." src="img/B44_F001_000026.jpg" />


---

<div id="fLeft">
<h4>Metadata Matters</h4>
<ul>
<li>Espy File data demonstrated creators’ 
priorities, values, and mental framing 
that are inappropriate or conflict with 
our own</li>
</ul>
<img src="img/codebook2.png"/>
</div>
<div id="fRight">
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
	<li>"Student"</li>
	</ul>
	</li>
	</ul>
</div>

---

### Metadata Matters

* General Data Improvements
	* "Crime Committed" changed to "Crime Convicted"
	* Added Date of Conviction to Date of Execution
	* ISO dates
	* First and last name in individual fields
	* Sex to become gender assigned
* Race does not conform to an established standard
* Feedback welcome!

---

### "Unconfirmed" cases

<img src="img/enslavedWoman1.png" alt="Index card summary of enslaved women named Phoebe who was accused of murder, it is unclear if she was executed." />

---

<div id="fLeft">
<img src="img/B19_F006_000008.jpg" alt="Article from the 1829 New Orleans Bee which is one of the few known primary sources documenting the case." />
</div>
<div id="fRight">
<img src="img/B19_F006_000009.jpg" alt="Second article from the 1829 New Orleans Bee which is one of the few known primary sources documenting the case."/>
</div>

---

### "Unconfirmed" cases

<div id="fLeft">
<ul>
<li>Added over 6,000 records</li>
	<ul>
		<li>Real number will be smaller after disambiguation</li>
	</ul>
<li>15,254 to 21,325 known executions</li>
<li>Documented and underdocumented</li>
</ul>
</div>
<div id="fRight">
	<img alt='Note of unconfirmed execution: "Legal Execution for Witchcraft in 1793 sounds fishy..."' src="img/B36_F004_000010.jpg"/>
</div>
   

---

### Linked Data Problems

* Hard to find vocabularies with sufficient precision
* Create one?
	* Access to expertise, School of Criminal Justice, Advisory Board
* Issues with digital archival objects as well
* Archives may have a fundamental mission conflict with linked data
	* Archival description manages objects with minimal metadata by relying on context
	* Archives don't aim to create objective/authoritative data


---

<!-- .slide: data-background="img/c4l-arclight1.png" -->
<p class="altText">Screenshot of ArcLight, which is used with Hyrax and NCSU's Quicksearch to provide access.</p>

---

<!-- .slide: data-background="img/c4l-arclight2.png" -->
<p class="altText">Screenshot of ArcLight showing links to contextual archival description.</p>

---

<!-- .slide: data-background="img/c4l-arclight3.png" -->
<p class="altText">Screenshot of ArcLight highlighing links to contextual archival description.</p>

---

<!-- .slide: data-background="img/arclight3.png" -->
<p class="altText">Screenshot of JSON API provided by ArcLight.</p>

---

<!-- .slide: data-background="img/c4l-hyrax1.png" -->
<p class="altText">Screenshot of document in Hyrax with contextual links provided by ArcLight API.</p>

---

### Providing Computational Access to Records of American Capital Punishment
<br/>

<h4><a href="https://archives.albany.edu">https://archives.albany.edu</a></h4>

##### Gregory Wiedeman
##### University Archivist
##### University at Albany, SUNY
##### <img alt="Twitter logo" src="img-saa16/twitter.png" style="margin: -5px; background: none; border: none; box-shadow: none;" width="45px" /> @GregWiedeman
