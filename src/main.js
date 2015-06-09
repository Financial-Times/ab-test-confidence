
'use strict';

// Calculation of the cumulative normal distribution - http://abtester.com/calculator/

var cumnormdist = function (x) {
	var b1 =  0.319381530;
	var b2 = -0.356563782;
	var b3 =  1.781477937;
	var b4 = -1.821255978;
	var b5 =  1.330274429;
	var p  =  0.2316419;
	var c  =  0.39894228;
	var t;

	if(x >= 0.0) {
		t = 1.0 / ( 1.0 + p * x );
		return (1.0 - c * Math.exp( -x * x / 2.0 ) * t *
		( t *( t * ( t * ( t * b5 + b4 ) + b3 ) + b2 ) + b1 ));
	}
	else {
		t = 1.0 / ( 1.0 - p * x );
		return ( c * Math.exp( -x * x / 2.0 ) * t *
		( t *( t * ( t * ( t * b5 + b4 ) + b3 ) + b2 ) + b1 ));
	}
};

// http://20bits.com/article/statistical-analysis-and-ab-testing

module.exports = {

	conversionRate: function (a, b) {
		return Math.round((b/a) * 100000) / 100000;
	},

	standardError: function (a) {
		var cr = this.conversionRate(a.visitors, a.conversions);
		var err = Math.sqrt(cr * (1 - cr) / a.visitors);
		return Math.round(err * 100000) / 100000;
	},

	zScore: function (a, b) {
		var z = (this.conversionRate(a.visitors, a.conversions) - this.conversionRate(b.visitors, b.conversions)) / Math.sqrt(Math.pow(this.standardError(a), 2) + Math.pow(this.standardError(b), 2));
		return Math.round(z * 100000) / 100000;
	},

	pValue: function (zScore) {
		var p = cumnormdist(zScore);
		return Math.round(p * 100000) / 100000;
	},

	at90percent: function (n) {
		return n < 0.1 || n > 0.9;
	},

	at95percent: function (n) {
		return n < 0.05 || n > 0.95;
	},

	at99percent: function (n) {
		return n < 0.01 || n > 0.99;
	}
};
