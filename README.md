
The statistical functions behind A/B test reporting. Isomorphic.

## Usage

Given an the user numbers and conversion rates for a couple of variants ...

	var a = {
		visitors: 1531,
		conversions: 576
	}

	var b = {
		visitors: 1627,
		conversions: 627
	}

We can calculate our confidence in the stats for this :-

	confidence.conversionRate(1531, 576)   // 0.37622 - i.e. 37% conversion rate

	confidence.zScore(a, b)   // z-score of -0.5292

Run `make test` for the full set of functions.
