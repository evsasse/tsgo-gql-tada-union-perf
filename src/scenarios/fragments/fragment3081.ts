import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3079 } from "./fragment3079";
import type { FragmentToken3080 } from "./fragment3080";

export const FRAGMENT_3081 = gql(`
  fragment Fragment3081 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult3081 = ResultOf<typeof FRAGMENT_3081>;
type FragmentSelf3081 = NonNullable<FragmentResult3081>;

export type FragmentToken3081 =
  | FragmentSelf3081["__typename"]
  | FragmentSelf3081["typenameHint"] | FragmentToken3079 | FragmentToken3080;
