import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2260 } from "./fragment2260";
import type { FragmentToken2261 } from "./fragment2261";

export const FRAGMENT_2262 = gql(`
  fragment Fragment2262 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult2262 = ResultOf<typeof FRAGMENT_2262>;
type FragmentSelf2262 = NonNullable<FragmentResult2262>;

export type FragmentToken2262 =
  | FragmentSelf2262["__typename"]
  | FragmentSelf2262["typenameHint"] | FragmentToken2260 | FragmentToken2261;
