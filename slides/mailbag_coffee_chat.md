---
title: WARC your Email
revealOptions:
    transition: 'fade'
---
<style>
.fLeft {float: left; max-width: 50%;}
.fRight {float: right; max-width: 50%;}
#smallLink {font-size: 18px;}
.whitebg {background-color: #fff; padding: 30px !important;}
.reveal section img {border: none; background: rgb(255, 255, 255, 1);}
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
.wrap {
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

## WARC your Email
### How Web Archives Works for Email Preservation

[gregwiedeman.com/slides/mailbag_coffee_chat.html](https://gregwiedeman.com/slides/mailbag_coffee_chat.html)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY

---

## WARC your Email
### How Web Archives Works for Email Preservation

* Challenges of Email Preservation
* How WARCs address the issues
* Mailbag specification
* mailbagit tool
* Google Colab demo

---

## Project Origins

* How can we document elections in New York?
* 2016 pilot project to collect fundraising emails from federal-level incumbent candidates
* 2018 expanded to state Senate and Assembly, Governor’s race
* Signed up for email on candidate websites
* Used Gmail account
* MBOX file export with Google takeout 😀

---

## Now what?

* Tried processing MBOXs from 2016 and 2018 in 2019
* Python scripts to extract HTML
* Convert to PDF with wkhtmltopdf
	* Pathways for email processing exist
	* Challenging for archivists
	* Requires custom code with many headaches

---

<!-- .slide: data-background="img/goodEmail.png" -->

---

<!-- .slide: data-background="img/goodEmail2.png" -->

---

<!-- .slide: data-background="img/badEmail1.png" -->

---

<!-- .slide: data-background="img/badEmail2.png" -->

---

<!-- .slide: data-background="img/badEmail5.png" -->

---

<!-- .slide: data-background="img/badEmail3.png" -->

---

<!-- .slide: data-background="img/badEmail4.png" -->

---

[47.html](47.html)

---

<!-- .slide: data-background="img/noWayback.png" -->

---

### Email Export files degrade over time

* Do not include externally-hosted content
	* Images
	* CSS (potentially interactive)
* Significant data loss 8 months later
* Links to other web content
* Email marketing software obfuscates URLs

---

## The Problem

> "As a very busy archivist, I would like to store this email I have, so that when I return to it later, all the data will be preserved in a structured way."

---

<!-- .slide: data-background="img/emailFormats.png" -->

---

### Email formats are problematic

* MBOX, EML, PST, MSG
  * Do not preserve external content 
  * Rapidly decay
  * Proprietary formats with limited open source support (PST, MSG)
* All export formats have data structure limitations inherent in email, e.g. unspecified encoding

---

### Email formats are problematic

* PDFs 
  * Preserves email well as a visual document
	* Sufficent for many emails
	* Not all emails are static documents
	* Some clients support HTML5 Video 🤯
  * Doesn't preserve structure for computational use

---

## Web Archives for Email?

* Email is of the web 🤔
	* HTML and CSS
	* Used in a type of browser
* WARCs preserves visual document experience well
* WARCs maintains email data structure
* Can include additional metadata
* Previously no tools or common practices


---

## [Mailbag Project](https://archives.albany.edu/mailbag/)

* 2022-2023 grant project
	* [Project Team](https://archives.albany.edu/mailbag/about/)
* Funded by [Email Archives: Building Capacity and Community](https://emailarchivesgrant.library.illinois.edu/) project (EA:BCC)

---

## The Mailbag Approach

* Multiple preservation formats
	* MBOX + PDFs
	* MBOX + PDFs + WARCs
	* PST + EMLs  + PDFs
	* PST + MBOX + PDFs + WARCs
	* EML + PDFs + WARCs
* Common package based on Bagit
	* Maintain relationships
	* Preserve actionability

---

## Part 1: Mailbag specification

* [Mailbag specification](https://archives.albany.edu/mailbag/spec/)
  * Implementation-neutral extension [Bagit spec](https://datatracker.ietf.org/doc/html/rfc8493)
  
```
<base directory>/
     |
     +-- bagit.txt
     |
     +-- bag-info.txt
     |
     +-- mailbag.csv
     |
     +-- manifest-<algorithm>.txt
     |
     +-- tagmanifest-<algorithm>.txt
     |
     +-- data/
          |
          +-- mbox/
          |     +-- [payload files]
          +-- pdf/
          |     +-- [payload files]
          +-- warc/
          |     +-- [payload files]
          +-- attachments/
                +-- [Mailbag-Message-ID]/
                |     -- attachments.csv
                |     -- [payload files]
                +-- [Mailbag-Message-ID]/
                      -- attachments.csv
                      -- [payload files]

```
  
---

## Functional Specifications

* Abstract documents that define what a tool does or how data is structured
* Communication tool to more participatory design
* Give practitioners a say!
	* [Mailbag](https://github.com/UAlbanyArchives/mailbag-specification/blob/main/mailbag.md#52-bag-infotxt)
	* [Bagit](https://datatracker.ietf.org/doc/html/rfc8493)
	* [WARC](https://iipc.github.io/warc-specifications/specifications/warc-format/warc-1.1-annotated/)
	* [Email](https://datatracker.ietf.org/doc/html/rfc2822)

---

## Part 2: mailbagit tool

* [Python utility](https://github.com/UAlbanyArchives/mailbagit)
* Very basic GUI
* Accessible "guided" path
* Builds PDF, WARCs from common email formats

---

## mailbagit setup

* Overview of options and gotchas
* Jupyter Notebook in Google Colab demo
* [More Detailed workshop](https://gregwiedeman.com/slides/mailbagitDLF2022.html#/4)

---

## mailbagit setup

* [Python install with pip](https://archives.albany.edu/mailbag/python/)
  * Some challenges on Windows
* [Using Windows executables](https://archives.albany.edu/mailbag/exe/)
	* need [admin rights](https://archives.albany.edu/mailbag/exe/#unblocking-mailbagitexe-and-mailbagit-guiexe)
* [Docker images](https://archives.albany.edu/mailbag/docker/)

---

## Python & pip install

* install mailbagit with pip

`pip install mailbagit`

* For non-Windows users

`pip install mailbagit[pst]`

---

## Working with PSTs on Windows

* Visual Studio Installer
  * Community edition works
* Need "Desktop development with C++"
* And "VS 2019 C++ x64/x86 build tools"
* Not always reliable
* [Docs for this](https://archives.albany.edu/mailbag/python/#working-with-pst-files)

---

## PDFs require external dependencies

* [wkhtmltopdf](https://wkhtmltopdf.org/)
  * `pdf`
* [Google Chrome](https://www.google.com/chrome/) (`chrome`, `chrome.exe`, or `google-chrome`)
  * `pdf-chrome`
* [More setup details](https://archives.albany.edu/mailbag/pdf/)

---

## Google Colab mailbagit setup

* Go to [colab.research.google.com](https://colab.research.google.com/)
* Load from Github
* Enter the Github URL: https://github.com/UAlbanyArchives/mailbagit-workshop
* Select the "mailbagit_workshop.ipynb" notebook

---

## Google Colab mailbagit setup

![Screenshot showing how to load the workshop notebook in Google Colab.](img/mailbag-colab-notebook.png)

---

## What mailbagit does

* Takes email export files
  * PST, MBOX, MSG, EML
  * Single files or directory of files
  * "companion" files option
* Packages them into a mailbag
* Creates derivative files
  * TXT, HTML, EML, MBOX
  * PDF, PDF-chrome, WARC

---

### Speed

* Things that are fast
  * MBOX, EML sources
  * TXT, HTML, EML, MBOX derivatives
* Things that are slow
  * PST, MSG sources
  * PDF, WARC derivatives

---

## CLI Options

* -r --dry-run
* -k --keep
* --css path/to/styles.css
* -c --compress zip
* -f --companion_files

---

## CLI Options

* --capture-date
* --capture-agent
* --capture-agent-version
* Most bagit-python options
  * --processes
  * Checksums, --md5, --sha512
  * --source-organization
  * not -quiet, -validate, -fast

---

## Privacy & Security concerns

* [Email trackers](https://archives.albany.edu/mailbag/concerns/#email-trackers)
  * PDF and WARC derivatives ping all URLs
* [File inclusions](https://archives.albany.edu/mailbag/concerns/#file-inclusions-in-pdfs-and-warcs)


---

## mailbagit error reports

* external to mailbag
* created on -r --dry-run
  * more errors will show without dry-run
  * errors from subprocesses
    * wkhtmltopdf
    * chrome
* errors.csv
* .txt file for each message with error and full stack trace


---

### Lets make some WARCs!

```
mailbagit msgs -i msg -d eml html warc -m test5 -k
```

Check out a WARC with [replayweb.page](https://replayweb.page/)!

---

### How mailbagit makes WARCs

* [mailbagit WARC module](https://github.com/UAlbanyArchives/mailbagit/blob/main/mailbagit/derivatives/warc.py)
	* Extensible! You can make your own plugin
* WARCs and PDFs use a common [HTML extract and formatting process](https://github.com/UAlbanyArchives/mailbagit/blob/main/mailbagit/helper/derivative.py#L50)
	* wraps partial html
	* Adds a table of basic headers
* Serves HTML locally with [http.server](https://docs.python.org/3/library/http.server.html)
* uses [warcio](https://github.com/webrecorder/warcio) and `requests` to write WARCs
* Writes attachments as response records
* -l, --external-links option will include \<a\> links

---

### How mailbagit makes WARCs

* WARC-Target-URI
  * uses "mailbag" and Mailbag-Message-ID
  * "http://mailbag/11/body.html"
* body.html response record
* adds headers to [WARC metadata record](https://iipc.github.io/warc-specifications/specifications/warc-format/warc-1.1-annotated/#metadata)
	* not used by replayweb.page
* headers duplicated in headers.json response record
* [More documentation](https://archives.albany.edu/mailbag/warcs)

---

## How mailbagit handles encoding

* Bodies and headers
* Tries listed encoding if present (and valid)
* Tries chardetect
  * raises warning if successful
  * raises error if failed
* replaces errors with listed encoding
* Writes derivatives as UTF-8
  * except EML/MBOX

---

## Lossiness in derivatives

* Most derivatives only contain part of the data
* Most derivatives get written to/from [the mailbagit Model](https://github.com/UAlbanyArchives/mailbagit/blob/main/mailbagit/models.py)
* EML and MBOX derivatives
  * tries to write complete object
  * only possible for EML/MBOX sources
  * uses original encoding
  * sometimes fails due to encoding issues
    * raises warning and generates from Model
    
---

### WARCs for Email Preservation

* Preserves external content and data structure
* Can include attachments
* Useful for emails that may have more dynamic content
* No real established practices
	* use WARC-Target-URI
	* Metadata record
* WARCs are getting easier to use
	* [replayweb.page](https://replayweb.page/)
	* [WACZ](https://specs.webrecorder.net/wacz/1.1.1/)

---

## WARC your Email
### How Web Archives Works for Email Preservation

[gregwiedeman.com/slides/mailbag_coffee_chat.html](https://gregwiedeman.com/slides/mailbag_coffee_chat.html)

Gregory Wiedeman<br/>
University Archivist<br/>
University at Albany, SUNY