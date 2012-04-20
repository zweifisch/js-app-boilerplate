({
    baseUrl: 'public/js',
    optimize: 'none',
    pragmasOnSave: {
        excludeCoffeeScript: true
    },
    modules: [
        {
            name: "loader"
        }
    ],
	 // name: "main",
    out:"build/public/js/loader.js"
})
