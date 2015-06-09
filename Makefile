.PHONY: test

test: server client verify

verify:
	@obt verify

server:
	@mocha --verbose --reporter spec ./tests
	
client: 
	@mkdir -p ./tmp
	@browserify tests/confidenceSpec.js > tmp/confidenceSpec.js
	@karma start karma.conf.js
