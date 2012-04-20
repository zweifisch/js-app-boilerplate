desc "build"
task :build do
	`rm -rf build`
	`mkdir -p build/public/js`
	`mkdir -p build/public/css`
	`cp public/js/require.js build/public/js/require.js`
	puts 'merge js'
	system "r.js -o build.js"
	system "du -sh build/public/js/loader.js"

	`cp index.html build/index.html`
end

desc "optimize"
task :optimize => :build do
	puts 'js'
	system "uglifyjs --overwrite build/public/js/main.js"
	system "du -sh build/public/js/main.js"
end

task :default => :build
