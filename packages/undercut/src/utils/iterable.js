import { isFunction } from "./language.js";

export function getIterator(iterable) {
	return iterable[Symbol.iterator]();
}

export function tryCloseIterator(iterator) {
	if (isFunction(iterator.return)) {
		iterator.return();

		return true;
	}

	return false;
}
