## Providing Basic Access to Web Archives Provenance Data

[Gregory](http://www.gregwiedeman.com) [Wiedeman](https://twitter.com/GregWiedeman)

University Archivist

[University at Albany, SUNY](http://library.albany.edu/archive/)

Archives Unleashed London

---

## UAlbany Preserves Public Records on the Web

* Public University
* State records laws mandate permanent retention of certain records
* Web archives preserve these records in their original form

---

<!-- .slide: data-background="img/undergradBulletin.png" -->

---

## Where do Web Archives Come From?

* Archives document and maintain provenance
* Users need provenance to frame their research question
* Our Web Archives are captured from Archive-It
	* Collection process is complex and opaque

---

## Archive-It Partner Data API

* Part of the Archive-It 5.0 web application
	* Selects seeds, schedules crawls, applies scoping rules
* Archive-It partners can query this applications data with REST API 

---

## What does the Partner Data API contain?

* Type of crawl
* Unique ID
* Crawl result
* Crawl start, end time
* Recurrence
* Extent, data & docs captured
* Docs queued

---

<pre>
<code>
requesting https://partner.archive-it.org/api/crawl_job?account=652&id=304464
[
  {
    "time_limit": 259200, 
    "current_kb_rate": 0.0, 
    "test_crawl_state_changed_by": null, 
    "test_crawl_state": null, 
    "thread_count": 0, 
    "download_failures": 4, 
    "patch_for_qa_job": null, 
    "recurrence_type": "MONTHLY", 
    "pdfs_only": false, 
    "uid": "20170601204939320", 
    "id": 304464, 
    "last_resumption": null, 
    "description": "jobId=304464, recurrence=MONTHLY, maxDuration=259200, maxDocumentCount=null, isTestCrawl=false, isPatchCrawl=false, oneTimeSubtype=null, seedCount=3, accountId=652, accountType=SUBSCRIBER, organizationName=\"University at Albany SUNY\", collectionId=7082, collectionName=\"Environmental Advocates of New York\", collectionPublic=true", 
    "discovered_count": 83184, 
    "queued_count": 55809, 
    "warc_revisit_count": 1786, 
    "doc_rate": 0.11, 
    "port": 6440, 
    "novel_count": 25582, 
    "total_data_in_kbs": 1572427, 
    "byte_limit": null, 
    "original_start_date": "2017-06-01T20:49:39Z", 
    "kb_rate": 6.0, 
    "test": false, 
    "crawl_stop_requested": null, 
    "type": "MONTHLY", 
    "job_name": "7082-20170601204939320", 
    "processing_end_date": "2017-06-04T23:51:23Z", 
    "status": "FINISHED_TIME_LIMIT", 
    "document_limit": null, 
    "end_date": "2017-06-04T20:50:40Z", 
    "warc_url_count": 27366, 
    "collection": 7082, 
    "current_doc_rate": 0.0, 
    "host": "wbgrp-crawl028.us.archive.org", 
    "warc_compressed_bytes": 557584792, 
    "scheduled_crawl_event": 1034693, 
    "warc_uncompressed_bytes": 1665551622, 
    "downloaded_count": 27375, 
    "workflow_step": 100, 
    "account": 652, 
    "duplicate_count": 1793, 
    "resumption_count": 0, 
    "elapsed_ms": 259236635, 
    "url": "https://localhost:6440/engine/job/7082-20170601204939320", 
    "duplicate_bytes": 312923523, 
    "novel_bytes": 1297242545, 
    "start_date": "2017-06-01T20:49:39Z", 
    "warc_content_bytes": 1297242964
  }
]

</code>
</pre>

---

## What can we do with this data?

* Put it in a finding aid
* Hopefully machine-readable in the future

[http://meg.library.albany.edu:8080/archive/view?docId=apap362.xml#d89704e6c986cfb2dc803ba05d298eb3](http://meg.library.albany.edu:8080/archive/view?docId=apap362.xml#d89704e6c986cfb2dc803ba05d298eb3)

---

## Providing Basic Access to Web Archives Provenance Data

[http://www.github.com/UAlbanyArchives/describingWebArchives](http://www.github.com/UAlbanyArchives/describingWebArchives)

* Sample scripts
* Command Line query tool
* Working script to automate provenance data into ArchivesSpace through API