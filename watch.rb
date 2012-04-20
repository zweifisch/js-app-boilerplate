
watch('.*\.coffee') { |f| puts `coffee -c #{f}` }

watch('.*\.styl') { |f| puts `stylus -c #{f}` }
