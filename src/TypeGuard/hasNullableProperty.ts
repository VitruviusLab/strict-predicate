import type {
	ObjectWithNullableProperty,
} from "../Types/_index.js";

function hasNullableProperty<O extends object, K extends string>(
	value: O,
	property: K,
): value is ObjectWithNullableProperty<O, K>
{
	return property in value;
}

export { hasNullableProperty };
