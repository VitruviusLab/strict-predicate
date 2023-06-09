# TypeGuard

## IsPrimitive

```ts
isPrimitive(value: unknown): boolean
```

Narrow down the value to being nullish, a boolean, a number, or a string.

## IsDefined

```ts
isDefined(value: unknown): boolean
```

Narrow down the value to being not nullish.

## IsBoolean

```ts
isBoolean(value: unknown): boolean
```

Narrow down the value to being a boolean.

## IsNumber

```ts
isNumber(value: unknown): boolean
```

Narrow down the value to being a number, but not NaN.

## IsInteger

```ts
isInteger(value: unknown): boolean
```

Narrow down the value to being a safe integer.

## IsFiniteNumber

```ts
isFiniteNumber(value: unknown): boolean
```

Narrow down the value to being a number, but not NaN nor +/-Infinity.

## IsString

```ts
isString(value: unknown): boolean
```

Narrow down the value to being a string.

## IsArray

```ts
isArray(value: unknown, constraints?: ArrayConstraints): boolean
```

Narrow down the value to being an array.

The optional parameter `constraints` accept an object described by the following interface.

```ts
interface ArrayConstraints<T>
{
	minLength?: number;
	itemGuard?: (item: unknown) => item is T;
}
```

If `minLength` is provided, it'll confirm that the value has at least that many items.<br />
If `itemGuard` is provided, it'll confirm that the predicate hold true for every item.

## IsPopulatedArray

```ts
isPopulatedArray(value: unknown, constraints?: ArrayConstraints): boolean
```

Like `IsArray`, but narrow it to being a populated array.

## IsRecord

```ts
isRecord(value: unknown, itemGuard?: <T>(item: unknown) => item is T): boolean
```

Narrow down the value to being a record: an object with no prototype, or directly using Object prototype.

Symbol keys are ignored when validating record items.

## IsObject

```ts
isObject(value: unknown): boolean
```

Narrow down the value to being an object.

## IsFunction

```ts
isFunction(value: unknown): boolean
```

Narrow down the value to being a function, generator function, method, or class.

## IsCallable

```ts
isCallable(value: unknown): boolean
```

Narrow down the value to being not constructible.## HasAllowedKeys

```ts
hasAllowedKeys(value: object, allowed_keys: Array<string>): boolean
```

Confirm that the value only has allowed keys.

## HasNullableProperty

```ts
hasNullableProperty(value: object, property: string): boolean
```

Narrow down the value to being an object with the property defined, though it may be nullish.

## HasProperty

```ts
hasProperty(value: object, property: string): boolean
```

Narrow down the value to being an object with the property defined.

## IsStructuredData

```ts
isStructuredData(value: object, descriptor: TypeGuardStructuredDataDescriptor<T>): boolean
```

Narrow down the value to a specificly structured data object.
The descriptor is enforced into matching the type it narrows down to.

For each possible property, you can specify a boolean flag `optional` if the property do not need to exists.
And a flag `nullable` if the property value can be nullish.

Example of use

```ts
interface ICat
{
	name: string;
	birthTimestamp?: number;
	tagId: string|undefined;
}

isStructuredData(
	value,
	{
		name: {
			test: isString
		},
		birthTimestamp: {
			optional: true,
			test: isNumber
		},
		tagId: {
			nullable: true,
			test: isString
		},
	}
)
```
