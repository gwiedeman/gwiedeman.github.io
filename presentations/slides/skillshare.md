##Automating Web Archives Records in ASpace

####Gregory Wiedeman
####University Archivist
####University at Albany, SUNY

http://gwiedeman.github.io/presentations/slides/skillshare.html
http://bit.ly/2dGviYp

---

## Web crawls are Archives too!

* UAlbany Web Archiving program with Archive-It since 2013
* Mission of preserving permanent public records available only online
* No real public access or use

---

## Web crawls are Archives too!

* Web collections have paper equivalents
* Bound Course Bulletins, 1845-2014
* http://www.albany.edu/undergraduate_bulletin/
* http://www.albany.edu/english/under_course_schedules.php
* http://www.albany.edu/informationstudies/ist_courses.php

---

## Web crawling is different

* Process of web crawling is completely separate from archival description
* Crawls all of albany.edu
* New pages collected monthly or even daily
* Complex acquisition process
* Difficult to convey provenance

---

## Automate ASpace Records with APIs

* Arrange and describe online archival records in ASpace, just like paper
* Use ASpace and Archive-It APIs to update extents, dates, notes
* You can use Archive-It collections or anything collected by the Internet Archive

---

## Internet Archive and Archive-It CDX API

* CDX servers used for Wayback Machine
	* for each capture:
		* timestamp
		* Warc reference
		* mime type
		* http response
		* hash
* http://wayback.archive-it.org/3308/timemap/cdx?url=http://www.albany.edu/undergraduate_bulletin/
* https://web.archive.org/cdx/search/cdx?url=http://www.albany.edu/undergraduate_bulletin/

---

## Setup

~~~~
git clone https://github.com/UAlbanyArchives/ASpace_WebArchives
cd ASpace_WebArchives
nano webArchives.ini
~~~~

~~~~
[config_data]
Username: admin
Password: admin
Backend_URL: http://localhost:8089
Paginated_Results: 100
Update_Parents: True
Date_Expressions: True

[custom_labels]
Web_Extents: Captures
Web_Dates_Label: creation
Publish_Notes: True
Archive-It_Acqinfo: Acquisition of Web Archives with Archive-It
InternetArchive_Acqinfo: Web Archives from General Internet Archive Collections
WARC_Label: Access to WARC Files
ArchiveIT_Object_Title: Access Web Pages stored in University Collections
InternetArchive_Object_Title: Access Web Pages stored in the Intenet Archive

[error_email]
sendErrorEmail: False
sender: dummyEmail@gmail.com
pw: ****************
receiver: yourEmail@university.edu
emailHost: smtp.gmail.com
port: 587
~~~~
* Put Web_Extents in Controlled values (Extent Extent Type)


---

## Setup

* Notes controlled by pipe delimited CSV

~~~~
nano webArchivesData.csv
~~~~

~~~~
Collection|Use|Acquisition notes|
Internet Archive|true|This data is not held by UAlbany, but within the Internet Archive's collections. The UAlbany web archiving program has contributed to the Internet Archive's collections since 2013, but has no control over their acquisition processes.|
3308|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|Surface-level crawling of www.albany.edu is performed daily which should includes most top-level webpages. Separate targeted crawls of every albany.edu subdomain are performed monthly to attempt to gather all content. This includes: www.albany.edu, www.rna.albany.edu, www.ctg.albany.edu, www.ualbanysports.com, www.albany.edu/rockefeller, www.albany.edu/cela, www.albany.edu/asrc, m.albany.edu, library.albany.edu, events.albany.edu, cstar.cestm.albany.edu, csda.albany.edu, and alumni.albany.edu
6372|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6915|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
7082|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
7081|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6916|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
7801|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
7802|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6918|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6917|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
5793|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
5967|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6832|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6913|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
6914|true|Web crawling is managed through the Internet Archive's Archive-It service. This page includes links to both the university's collection and the Internet Archive's public collection.|
WARC|true|Researchers interested in data analysis with web archives may request a WARC file. WARC files are very large and difficult to work with. Your request may take time to process, and we may be unable to deliver your request remotely. Please consult an archivist if you are interested in advanced research with web archives.|
~~~~

---

## Arrange and Describe in ASpace

* Any archival object can be from web archives!
* Resource must have <phystech> note with content "Web Archives"
* Archival object and all parent objects must be Other Level, Web Archives
* Two external documents notes
	* Status: active, initial, or inactive
	* URL: www.albany.edu/senate

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

## Make sure requests is installed

~~~~
pip install requests
~~~~

~~~~
python
>>>import requests
>>>exit()
~~~~

---

## Run webArchives.py

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
