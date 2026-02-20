import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken894 } from "./fragment894";
import type { FragmentToken895 } from "./fragment895";

export const FRAGMENT_896 = gql(`
  fragment Fragment896 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult896 = ResultOf<typeof FRAGMENT_896>;
type FragmentSelf896 = NonNullable<FragmentResult896>;

export type FragmentToken896 =
  | FragmentSelf896["__typename"]
  | FragmentSelf896["typenameHint"] | FragmentToken894 | FragmentToken895;
