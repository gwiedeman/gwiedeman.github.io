---
title: Mailbag
revealOptions:
    transition: 'fade'
---
<style>
.fLeft {float: left; max-width: 50%;}
.fRight {float: right; max-width: 50%;}
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
.slide-background-content{background-size:contain!important;}
</style>

## Mailbag
### A Stable Package for Email with Multiple Masters

[gregwiedeman.com/slides/mailbagCNI.html](https://gregwiedeman.com/slides/mailbagCNI.html)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY


---

### Email Preservation

* No single master format for email
	* MBOX/EML don't preserve external content
	* PST are similar and proprietary
	* PDFs do not preserve structure
	* Not all emails are static documents
* Not many open source processing tools usable for archivists

---

<img src="img/emailImage.png" alt="2017 Email from Joe Crowley with embeded image of article calling him a rising star. The link is an expired redirect." />

---

<img src="img/email404.png" alt="2016 Email from Chuck Schumer displaying a 404 error where an image might be." />

---

## Multiple Master Formats

* MBOX/EML preserves structure as data
* PDF preserves document and allows for easy access
* WARC preserves interactivity

---

## A Stable Package


<div class="fLeft">
<ul>
<li>BagIt</li>
  <ul>
  <li>Widely used</li>
  <li>Validates fixity</li>
  <li>Uses filesystem for structure</li>
  </ul>
<li>Interoperable</li>
  <ul>
  <li>ePADD</li>
  <li>RATOM</li>
  </ul>
</ul>
</div>
<div class="fRight">
Mailbag Specification
 <img src="img/mailbagSpec.png" alt="Diagram of a Mailbag, including a space for MBOX/EML files, PDF files, and Web Archives with metadata in bag-info.txt" />
</div>

---

### Email Processing for Archivists

* Easy packaging near-to-capture
* Existing tools are challenging for archivists
  * Python email libraries
  * Batch PDF creation from email
  * Web Archives capture
* mailbag Python library
* Command Line utility
* Basic GUI with Gooey

---

<!-- .slide: data-background="img/mailbag.png" -->

Note: Diagram of Mailbag, showing inputs from IMAP, MBOX/EML and PST and outputs like reporting header information, exporting PDFs and repaying WARC files.

---


## Mailbag
### A Stable Package for Email with Multiple Masters

[gregwiedeman.com/slides/mailbagCNI.html](https://gregwiedeman.com/slides/mailbagCNI.html)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY