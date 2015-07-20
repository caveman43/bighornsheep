from urllib2 import Request, urlopen, URLError
hdr = {'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	   'Accept-Encoding':'gzip, deflate, sdch',
	   'Accept-Language':'en-US,en;q=0.8,hi;q=0.6',
	   'Connection':'keep-alive',
	   'Host':'rbidocs.rbi.org.in',
       'Referer':'http://rbidocs.rbi.org.in/rdocs/Content/DOCs/IFCB2009_161.xls',
       'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36'}

file_index = ['01','02','03','04','05','06','07','08','09']

def getFileIFSC_RBI(index):
	filename = 'ifsc_'+index
	url = 'https://rbidocs.rbi.org.in/rdocs/Content/DOCs/IFCB2009_'+index+'.xls'
	req = Request(url,headers=hdr)
	try:
		print 'Downloading... :'+filename
		response = urlopen(req)
	except URLError as e:
		print 'Error occured!'
		if hasattr(e, 'reason'):
			print 'We failed to reach a server.'
			print 'Reason: ', e.reason
		elif hasattr(e, 'code'):
			print 'The server couldn\'t fulfill the request.'
			print 'Error code: ', e.code
	else:
		excel_doc = response.read()
		f = open(filename,'w')
		f.write(excel_doc)
		print 'Downloaded :'+filename
		f.close()

# get files from 1 to 10
for index in file_index:
	getFileIFSC_RBI(index)

# get rest of the files
for index in range(10, 171):
	getFileIFSC_RBI(str(index))
