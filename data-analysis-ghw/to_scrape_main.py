import requests
from bs4 import BeautifulSoup
import csv

URL = "http://quotes.toscrape.com/"
page = requests.get(URL)

soup = BeautifulSoup(page.text, "html.parser")
# print(soup.prettify())

with open("scraping-hub-1.csv", "a") as tempLog:
  csv.writer(tempLog).writerow(["Quote", "Author", "Tags"])

quoteAuthorTags = soup.find_all(class_ = "quote")
# print(quoteAuthorTags)

for eachQuoteAuthorTag in quoteAuthorTags:
  quote = eachQuoteAuthorTag.find(class_="text").text.replace('“', '').replace('”', '')
  author = eachQuoteAuthorTag.find(class_="author").text
  tag = eachQuoteAuthorTag.find(class_="keywords")["content"]
  with open("scraping-hub-1.csv", "a") as tempLog:
    csv.writer(tempLog).writerow([quote, author, tag])


