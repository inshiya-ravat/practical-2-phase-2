type GetRequiredKeys<T extends Record<string,any>> = {
    [key in keyof T]-? : Object extends Pick<T,key> ? never : key
}[keyof T]
type A = GetRequiredKeys<{ a: string; b?: number; c: boolean }>;
// Expected: "a" | "c"