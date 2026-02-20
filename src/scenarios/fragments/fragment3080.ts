import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3078 } from "./fragment3078";
import type { FragmentToken3079 } from "./fragment3079";

export const FRAGMENT_3080 = gql(`
  fragment Fragment3080 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult3080 = ResultOf<typeof FRAGMENT_3080>;
type FragmentSelf3080 = NonNullable<FragmentResult3080>;

export type FragmentToken3080 =
  | FragmentSelf3080["__typename"]
  | FragmentSelf3080["typenameHint"] | FragmentToken3078 | FragmentToken3079;
