require [
	'jquery'
	'console'
	'knockout'
	'director'
	'ui'
], ($,console,ko)->
	$ ->
		console.log 'loaded'

		home = ->
			require [
				'text!tmpl/msg.html'
				'cs!model/viewmodel'
			], (msg,ViewModel)->
				$('#content').html(msg)
				ko.applyBindings new ViewModel, document.getElementById 'content'

		about = ->
			new ui.Dialog
			  title: 'Welcome'
			  message: "to the About page"
			.show()
			.hide(2000)
			$('#content').text('about')

		contact = ->
			$('#content').text('contact')

		router = Router 
			'/about': about
			'/contact': contact
			'/': home
		router.init()
