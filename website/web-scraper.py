import urllib.request 
import bs4
from bs4 import BeautifulSoup
import lxml
url = "https://ca.gofundme.com/f/camp-ooch-season-of-giving/robots.txt"
html = urllib.request.urlopen(url)
soup = bs4.BeautifulSoup(html, 'lxml')
type (soup)
print(soup.title)
#final_amount = soup.find_all('div', values_ = '29.166666666666668')
#print (type (final_amount))
#print (len(final_amount))
rows = soup.find_all("current")
str_row = str(rows)
#clean_text = bs4.BeautifulSoup(str_row, "lxml").get_text()
#print(clean_text)
#checking to see if directly can scrape w/ BeautifulSoup
first_scrape = (soup.find("h2", {"class": "m-progress-meter-heading"}))
print(first_scrape.text)
# convert string vals to int 
raised_amount = int(first_scrape.text[1:4])
total_amount = int(first_scrape.text[16:19])
print(raised_amount)
print(total_amount)
# append to a text file
f = open("funding_values.txt","w+")
#f=open("guru99.txt","a+")
for i in range(1):
    f.write(str(raised_amount)+"\n")
    f.write(str(total_amount))
f.close()



