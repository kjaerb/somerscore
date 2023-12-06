import { NamespaceKeys, useTranslations } from "next-intl";

type NoneEmptyString<T> = T extends string ? Exclude<T, ""> : never;

export type KeyString<T, Prefix extends string = ""> = NoneEmptyString<
  T extends Record<string, any>
    ?
        | {
            [K in keyof T]:
              | `${Prefix & string}${K & string}`
              | KeyString<T[K], `${Prefix & string}${K & string}.`>;
          }[keyof T]
        | Prefix
    : never
>;

export type IndexIntoObjectType<
  T extends Record<string, any>,
  Keys extends string
> = Keys extends keyof T
  ? T[Keys]
  : Keys extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? IndexIntoObjectType<T[K], Rest>
    : never
  : never;

type Keys = KeyString<Messages>;

interface Props<TNamespace extends NamespaceKeys<Messages, Keys>> {
  namespace: TNamespace;
  path: Parameters<ReturnType<typeof useTranslations<TNamespace>>>[0];
  dynamic?: Parameters<ReturnType<typeof useTranslations<TNamespace>>>[1];
}

export function Text<TNamespace extends NamespaceKeys<Messages, Keys>>({
  namespace,
  path,
  dynamic,
}: Props<TNamespace>) {
  const translate = useTranslations<TNamespace>(namespace);

  if (dynamic) return translate(path, dynamic);

  return translate(path);
}
