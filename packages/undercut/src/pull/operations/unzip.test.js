import { identity } from "../../utils/function.js";
import { targetOf } from "../../utils/tests.js";

import { unzip, unzipWith } from "./unzip.js";
import { zip } from "./zip.js";

test("unzip", () => {
	expect(targetOf(
		unzip(),
		[]
	)).toEqual([]);

	expect(targetOf(
		unzip(),
		[[1, 1]]
	)).toEqual([[1], [1]]);

	expect(targetOf(
		unzip(),
		[[undefined, 1]]
	)).toEqual([[undefined], [1]]);

	expect(targetOf(
		unzip(),
		[[1, undefined]]
	)).toEqual([[1], [undefined]]);

	expect(targetOf(
		unzip(),
		[[undefined, undefined]]
	)).toEqual([[undefined], [undefined]]);

	expect(targetOf(
		unzip(),
		[[1, 2, 3], [4, 5, 6]]
	)).toEqual([[1, 4], [2, 5], [3, 6]]);

	expect(targetOf(
		unzip(),
		targetOf(
			zip([2, 5], [3, 6]),
			[1, 4]
		)
	)).toEqual([[1, 4], [2, 5], [3, 6]]);
});

test("unzipWith", () => {
	expect(() => unzipWith()).toThrow();

	expect(targetOf(
		unzipWith(identity),
		[]
	)).toEqual([]);

	expect(targetOf(
		unzipWith(identity),
		[[1, 1]]
	)).toEqual([[1], [1]]);

	expect(targetOf(
		unzipWith(item => item.split(",").map(Number)),
		["1,2,3", "4,5,6"]
	)).toEqual([[1, 4], [2, 5], [3, 6]]);
});