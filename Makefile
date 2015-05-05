.PHONY: test

test:
	@mocha --verbose --reporter spec ./tests

