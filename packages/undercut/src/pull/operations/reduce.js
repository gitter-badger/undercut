import { assertFunctor } from "../../utils/assert.js";

export function reduce(reducer, initial) {
	assertFunctor(reducer, "reducer");

	return function* (iterable) {
		let acc = initial;
		let index = 0;

		for (const item of iterable) {
			acc = reducer(acc, item, index);
			index++;
		}

		yield acc;
	};
}
