
class ViewModel
	constructor:->
		@msg = "Find Me!"

# if define?.amd
# 	define? 'ViewModel', [], -> ViewModel

if define?.amd 
	define? ['exports'], -> ViewModel

