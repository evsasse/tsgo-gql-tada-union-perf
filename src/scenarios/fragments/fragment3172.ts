import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3170 } from "./fragment3170";
import type { FragmentToken3171 } from "./fragment3171";

export const FRAGMENT_3172 = gql(`
  fragment Fragment3172 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult3172 = ResultOf<typeof FRAGMENT_3172>;
type FragmentSelf3172 = NonNullable<FragmentResult3172>;

export type FragmentToken3172 =
  | FragmentSelf3172["__typename"]
  | FragmentSelf3172["typenameHint"] | FragmentToken3170 | FragmentToken3171;
