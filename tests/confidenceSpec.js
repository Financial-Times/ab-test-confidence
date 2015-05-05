
var expect = require('chai').expect;

var confidence = require('../src/main');

describe('Confidence', function () {

	var a, b;

	beforeEach(function () {
		a = {
			visitors: 1531,
			conversions: 576
		}

		b = {
			visitors: 1627,
			conversions: 627
		}
	})

	it('Calculate the conversion rate', function () {
		expect(confidence.conversionRate(1531, 576)).to.equal(0.37622);
	})

	it('Calclate the standard error', function() {
		expect(confidence.standardError(a)).to.equal(0.01238);
	})

	it('Calculate the z-score', function() {
		expect(confidence.zScore(a, b)).to.equal(-0.5292);
	})

	it('Calculate the p-value', function() {
		expect(confidence.pValue(-0.52911)).to.equal(0.29836);
	})

	it('Calculate significance at 90% confidence', function() {
		expect(confidence.at90percent(0.2983)).to.equal(false);
		expect(confidence.at90percent(0.9283)).to.equal(true);
		expect(confidence.at90percent(0.0783)).to.equal(true);
	})

	it('Calculate significance at 95% confidence', function() {
		expect(confidence.at95percent(0.2983)).to.equal(false);
		expect(confidence.at95percent(0.9683)).to.equal(true);
		expect(confidence.at95percent(0.0383)).to.equal(true);
	})

	it('Calculate significance at 99% confidence', function() {
		expect(confidence.at99percent(0.2983)).to.equal(false);
		expect(confidence.at99percent(0.9983)).to.equal(true);
		expect(confidence.at99percent(0.0083)).to.equal(true);
	})

});
