import { targetOf } from "../../utils/tests.js";

import { unique } from "./unique.js";

test("unique", () => {
	expect(targetOf(unique(), [])).toEqual([]);
	expect(targetOf(unique(), [1])).toEqual([1]);
	expect(targetOf(unique(), [2, 5])).toEqual([2, 5]);
	expect(targetOf(unique(), [1, 1, 2, 1])).toEqual([1, 2]);
	expect(targetOf(unique(), ["a", 1, "a"])).toEqual(["a", 1]);

	const users = [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	];

	expect(targetOf(unique(), [users[0], users[0], users[1], users[0], users[1]])).toEqual([users[0], users[1]]);
});
