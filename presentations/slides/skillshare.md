#Automating Web Archives Records in ASpace

---

# Title

* Point 1
* Point 2

---

#some Code
~~~~
#function to loop through paginated results
def getResults(pageCount):
	resources = requests.get(aspaceURL + repoPath + "/resources?page=" + str(pageCount) + "&page_size=" + str(paginatedResults),  headers=headers).json()
	lastPage = resources["last_page"]
	print ("Requesting resource results page " + str(pageCount) + " of " + str(lastPage))
	findWebRecords(resources)
	if lastPage > pageCount:
		pageCount = pageCount + 1
		getResults(pageCount)
~~~~

---

## Second slide

> Best quote ever.

Note: speaker notes FTW!