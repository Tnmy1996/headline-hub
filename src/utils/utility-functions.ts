export function removeNullProperties<T extends Record<string, unknown>>(
    obj: T,
): Partial<T> {
    return Object.entries(obj)
        .filter(([_, value]) => value !== null)
        .reduce<Record<string, unknown>>((acc, [key, value]) => {
            acc[key] = value; // Type assertion
            return acc;
        }, {}) as Partial<T>;
}

export function removePropertiesByValue<
    T extends Record<string, number | string | null | undefined>,
    V extends number | string | null | undefined,
>(
    obj: T,
    valuesToRemove: Array<number | string | null | undefined>,
): Omit<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]> {
    return Object.entries(obj)
        .filter(([_, value]) => !valuesToRemove.includes(value))
        .reduce<Record<string, unknown>>((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {}) as Omit<
        T,
        { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
    >;
}
