import { targetOf } from "../../utils/tests.js";

import { find } from "./find.js";

test("find", () => {
	expect(() => find()).toThrow();

	const predicate = x => x === 2;

	expect(targetOf(find(predicate), [])).toEqual([]);
	expect(targetOf(find(predicate), [1])).toEqual([]);
	expect(targetOf(find(predicate), [2, 5])).toEqual([2]);
	expect(targetOf(find(predicate), [1, 0, 2, 5])).toEqual([2]);
	expect(targetOf(find(predicate), [1, -3, -5, 2])).toEqual([2]);

	const users = [
		{},
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	];

	expect(targetOf(find(u => u.name === "b"), users)).toEqual([users[2]]);
});