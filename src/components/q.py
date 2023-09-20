from os import listdir
from os.path import isfile, join
mypath = "/home/koome/Documents/Projects/image-gallery/public/"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
list2 = []
for file in onlyfiles:
  file = "/" + file
  list2.append(file)
print(list2)