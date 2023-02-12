import csv
from requests_html import HTMLSession

session = HTMLSession()

pages = []

URL = "https://hack-for-the-future.devpost.com/project-gallery"

for i in range(1, 3):
  newURL = URL + "?page=" + str(i)
  pages.append(newURL)

with open("hack-for-the-future.csv", "a") as tempLog:
  csv.writer(tempLog).writerow([
    "Project_Name",
    "Winner",
    "Project_Link",
    "Built_With"
  ])

for eachItem in pages:
  r = session.get(eachItem)
  galleryList = r.html.find(".gallery-item")
  for galleryItem in galleryList:
    projectName = galleryItem.find("h5", first=True).text
    projectLink = galleryItem.find("a")[0].absolute_links
    projectLinkList = list(projectLink)[0]
    winnerStatus = False
    if(galleryItem.find(".winner")):
      winnerStatus = True

    getProjectPage = session.get(projectLinkList)
    builtWith = getProjectPage.html.find("#built-with")
    for eachLi in builtWith:
      # print(eachLi.text.replace("Built With", "").strip())
      with open("hack-for-the-future.csv", "a") as tempLog:
        csv.writer(tempLog).writerow([
          projectName,
          winnerStatus,
          projectLinkList,
          eachLi.text.replace("Built With", "").strip()
        ])

    
  
  
