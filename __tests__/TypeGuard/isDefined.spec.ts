import { expect } from "chai";

import { isDefined } from "../../src/TypeGuard/isDefined.js";

import { BaseType, getInvertedValues, getValues } from "../Utils.js";

describe(
	"TypeGuard / isDefined",
	(): void =>
	{
		it(
			"should return false when given undefined, null, or NaN",
			(): void =>
			{
				const VALUES: Array<unknown> = getValues(BaseType.NULLISH);

				for (const ITEM of VALUES)
				{
					expect(isDefined(ITEM)).to.be.false;
				}
			}
		);

		it(
			"should return true when given anything else",
			(): void =>
			{
				const VALUES: Array<unknown> = getInvertedValues(BaseType.NULLISH);

				for (const ITEM of VALUES)
				{
					expect(isDefined(ITEM)).to.be.true;
				}
			}
		);
	}
);
