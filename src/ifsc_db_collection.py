import pymongo
import subprocess
import sys
import xlrd
from pymongo import MongoClient

connection = MongoClient('localhost', 27017)

db = connection.ifsc_db
ifsc_coll = db.ifsc_collection

#create dictionary of rows as key value pair from excel files
p = subprocess.Popen("ls /Users/pradeepdewda/ifsc_codes/ | grep \"ifsc_[0-9]*$\"", stdout=subprocess.PIPE, shell=True)
#(output, err) = p.communicate()
#print "no of files", output

def read_file(path):
    #Open and read an Excel file
    book = xlrd.open_workbook(path)
    # get the first worksheet
    first_sheet = book.sheet_by_index(0)
    Xrows = first_sheet.nrows
    # read a cell
    for rowVal in range(1,Xrows):
	cellDict = {}
	queryString = ""
	for cVal in range(0,8):
    		cell = first_sheet.cell(rowVal,cVal)
		ColName = first_sheet.cell(0,cVal)
		cellDict[ColName.value] = cell.value
		try:
			queryString += " " + str(cell.value)
		except:
			pass
	cellDict["QueryString"] = queryString
	obj_id = ifsc_coll.insert_one(cellDict).inserted_id
        print obj_id

for xFile in p.stdout:
	filename= '/Users/pradeepdewda/ifsc_codes/' + xFile.strip()
	#print filename
	read_file(filename)

connection.close()

