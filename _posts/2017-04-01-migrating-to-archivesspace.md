---
layout: post
title:  Migrating to ArchivesSpace at UAlbany
---

# Migrating to ArchivesSpace at UAlbany



This is an overview our ArchivesSpace migration process and descriptions of the code used. Hopefully this rather long-winded description helps document our processes and thinking.

Overall, my strategy was to import everything twice. Once we got most of our data into ASpace, I let our staff have a free run of the data to get comfortable with the application. We maintained our previous data stores as masters, and staff could create, edit, and delete ASpace data as much as they wanted. When we were done testing and I was comfortable with all the migration scripts, we cleared out all the data and made a clean import.