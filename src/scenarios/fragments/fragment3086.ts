import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3084 } from "./fragment3084";
import type { FragmentToken3085 } from "./fragment3085";

export const FRAGMENT_3086 = gql(`
  fragment Fragment3086 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult3086 = ResultOf<typeof FRAGMENT_3086>;
type FragmentSelf3086 = NonNullable<FragmentResult3086>;

export type FragmentToken3086 =
  | FragmentSelf3086["__typename"]
  | FragmentSelf3086["typenameHint"] | FragmentToken3084 | FragmentToken3085;
