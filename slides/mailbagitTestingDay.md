---
title: mailbagit Virtual Testing Day
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

## Mailbagit Virtual Testing Day

[gregwiedeman.com/slides/mailbagitTestingDay.html](https://gregwiedeman.com/slides/mailbagitTestingDay.html)

Gregory Wiedeman<br/>
Mark Wolfe<br/>
University at Albany, SUNY

---

## Goals

* Structured testing time
	* Finding bugs
	* Testing on more varied datasets
* Help/debugging of install issues
* User testing
	* Learn a bit about use cases/goals
	* User feedback/questions 
* Community building

---

## Introductions

Tell us who you are and describe your work or interest in Mailbag.

---

## Setup Mailbagit

* [Python install](https://www.python.org/downloads/)
* Windows executables
* Docker

---

## Where are we at?

* How many are comfortable with the command line?
* What OS are you using?
* Do you have a v3.7+ python install?
	* Or are using Windows with permissions?
	* Or have Docker?

---

## Python & pip install

* [Python installed](https://www.python.org/downloads/)
	* v3.7+
* Do I have pip?

`pip -V` or `pip3 -V`

* If you need pip:

`python -m ensurepip --upgrade`

---

## Setting up a virtualenv

```
pip install pipenv
pipenv shell
```

You may need:

```
pip3 install pipenv
python -m pip install pipenv
python3 -m pip install pipenv
```

---

## Installing `mailbagit`

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

---

## `mailbagit` command

`mailbagit -h`

---

## Installing the GUI

`pip install mailbagit[gui]`

* This may break on Linux distros
* Install a [specific wxPython first](https://archives.albany.edu/mailbag/python/#mailbagit-gui-on-ubuntu)

---

## Running the GUI

`mailbagit-gui`

* `mailbagit-gui.py`

```
from mailbagit import gui
gui()
```

* `python mailbagit-gui.py`

---

## Running Windows Executables

* Download them from the [v0.2.1 release on Github](https://github.com/UAlbanyArchives/mailbagit/releases/tag/v0.2.1)
* [Unblock executables from Defender SmartScreen](https://archives.albany.edu/mailbag/exe/#unblocking-mailbagitexe-and-mailbagit-guiexe)

---

## PDF dependancies

* [wkhtmltopdf](https://wkhtmltopdf.org/downloads.html) and [chrome](https://www.google.com/chrome/) --headless
* in PATH:
	* wkhtmltopdf
	* wkhtmltopdf.exe
	* google-chrome
	* chrome
	* chrome.exe

---

## Running on Docker

```
docker pull ualbanyarchives/mailbagit
docker run -it ualbanyarchives/mailbagit:latest
```

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

## Options

* -r --dry-run
* --css path/to/styles.css
* -c --compress zip
* -f --companion_files

---

## Additional options

* --capture-date
* --capture-agent
* --capture-agent-version
* Most bagit-python options
	* --processes
	* Checksums, --md5, --sha512
	* --source-organization
	* not -log, -quiet, -validate, -fast

---

# Email data

[https://archives.albany.edu/patron/vtd-sample-data.zip](https://archives.albany.edu/patron/vtd-sample-data.zip) (202MB)

[https://archives.albany.edu/patron/vtd-sample-data-small.zip](https://archives.albany.edu/patron/vtd-sample-data-small.zip) (28MB)

---

# Email data

* Inbox (directory of 331 .eml)
* msg (directory of 20 .msg)
* account.mbox (large)
* allfacstaff.pst (large)
* enron.pst (small)

---

### Speed

* Things that are fast
	* MBOX, EML sources
	* TXT, HTML, EML, MBOX derivatives
* Things that are slow
	* PST, MSG sources
	* PDF, WARC derivatives

---

## Privacy & Security concerns

* Email trackers
* PDF and WARC derivatives ping all URLs
* File inclusions

---

## Jupyter Notebooks




---

### Try a "dry run":
```
mailbagit account.mbox -i mbox -d html eml -m test1 -r
```
### Try it for real:
```
mailbagit account.mbox -i mbox -d html eml -m test1
```

---

## Logging

Windows Powershell:
```
$env:MAILBAGIT_LOG_LEVEL="info"
```

Posix:
```
export MAILBAGIT_LOG_LEVEL=debug
```

---

### Try some MSG files

Do a "dry run" first again
```
mailbagit msgs -i msg -d eml html txt -m test2 -r
```

```
mailbagit msgs -i msg -d eml html txt -m test2
```

---

## Mailbagit error reports

* external to mailbag
* created on -r --dry-run
	* more errors will show without dry-run
	* errors from subprocesses
		* wkhtmltopdf
		* chrome
* errors.csv
* .txt file for each message with error and full stack trace

---

## What's in a mailbag?

* bagit.txt, manifiests
* bag-info.txt
* mailbag.csv
* data (payload)

---

## bag-info.txt

```
Bag-Size: 34 MB
Bag-Software-Agent: bagit.py v1.8.1 <https://github.com/LibraryOfCongress/bagit-python>
Bag-Type: Mailbag
Bagging-Date: 2022-05-26
Bagging-Timestamp: 2022-05-26T16:15:48
EML-Agent: email
EML-Agent-Version: 3.9.12
External-Identifier: adeb0ab6-59b8-494c-be6a-de066f5c8f23
MSG-Agent: extract_msg
MSG-Agent-Version: 0.30.12
Mailbag-Agent: mailbagit
Mailbag-Agent-Version: 0.2.1
Mailbag-Source: msg
Original-Included: True
PDF-Agent: wkhtmltopdf
PDF-Agent-Version: wkhtmltopdf 0.12.6 (with patched qt)
Payload-Oxum: 36529495.87
WARC-Agent: warcio
WARC-Agent-Version: 1.7.4

```

---

## mailbag.csv headers

```
Error
Mailbag-Message-ID
Message-ID
Original-File
Message-Path
Derivatives-Path
Attachments (int)
Date
From
To
Cc
Bcc
Subject
Content-Type
```

---

## data (payload)

* attachments
	* [Mailbag-Message-ID]
		* attachments.csv
		* test.pdf
* pst
	* export.pst
* eml
	* 
* pdf
		

---

### Lets make some PDFs

Dry run:
```
mailbagit msgs/ -i msg -d eml pdf -m test3 -r
```

```
mailbagit msgs/ -i msg -d eml pdf -m test3
```

---

### Lets do the same, but with Chrome

```
mailbagit msgs/ -i msg -d eml pdf-chrome -m test4
```

---

### Try a PST

```
mailbagit enron.pst -i pst -d eml pdf html mbox -m test5
```

---

### Lets include some WARCs

```
mailbagit Inbox/ -i eml -d html warc -m test6
```

---

## How mailbagit handles encoding

* Bodies and headers
* Tries listed encoding if present (and valid)
* Tries chardetect
	* raises warning if successful
	* raises error if failed
* replaces errors with listed encoding
* Writes derivatives as "UTF-8"
	* except EML/MBOX

---

## Lossiness in derivatives

* Most derivatives only contain part of the data
* EML and MBOX derivatives
	* tries to write complete object
	* uses original encoding
	* only possible for EML/MBOX sources
	* sometimes fails due to encoding issues
		* raises warning and generates from Model
		
---

## EML / MBOX from Model

* [mailbagit Model](https://github.com/UAlbanyArchives/mailbagit/blob/main/mailbagit/models.py)
* Contains all headers, HTML and TXT bodies, attachments
* Writes folder structure to X-Folder header
* multipart/mixed
	* multipart/alternative (text/plain if present)
	* multipart/alternative (text/html if present)
	* application/pdf (application/octet-stream if missing)
	
---

## WARC derivatives

* Now only includes HTML
* WARC data and structure TBD
	* Will include headers
	* should include attachments
	* might include option for links

---

## Undecided issues 

* [empty PST folders](https://github.com/UAlbanyArchives/mailbagit/issues/117)
* Warnings for incorrect encoding listed, but successful decode?
* Distribution challenges
	* GUI and exe barriers
* WARCs

---

## Future Questions

* Packaging from IMAP
* Packaging over APIs
	* Gmail
	* Office365/Exchange
	* would require OAuth
* Exclusions/filtering	
* Would you like to see more data-centric output?


---

### Retrospective if time

[Jamboard](https://jamboard.google.com/d/1Fc64zlP4rouDzNTt8WvgXdLfc0mBPdCNvHcihyCq0bQ/viewer)

---

### Bonus: A big PST

Try a dry run first:
```
mailbagit allfacstaff.pst -i pst -d eml mbox html pdf -m test7 -r
```

```
mailbagit allfacstaff.pst -i pst -d eml mbox html pdf -m test7
```
