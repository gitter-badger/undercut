import { isIterable } from "../../utils/lang.js";

export function flat() { // TODO: depth
	return function* (iterable) {
		for (const item of iterable) {
			if (isIterable(item)) {
				yield* item;
			} else {
				yield item;
			}
		}
	};
}