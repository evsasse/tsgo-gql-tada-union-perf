import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken084 } from "./fragment084";
import type { FragmentToken085 } from "./fragment085";

export const FRAGMENT_086 = gql(`
  fragment Fragment086 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult086 = ResultOf<typeof FRAGMENT_086>;
type FragmentSelf086 = NonNullable<FragmentResult086>;

export type FragmentToken086 =
  | FragmentSelf086["__typename"]
  | FragmentSelf086["typenameHint"] | FragmentToken084 | FragmentToken085;
