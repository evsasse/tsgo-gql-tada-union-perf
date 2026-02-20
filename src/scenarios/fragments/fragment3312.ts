import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3310 } from "./fragment3310";
import type { FragmentToken3311 } from "./fragment3311";

export const FRAGMENT_3312 = gql(`
  fragment Fragment3312 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult3312 = ResultOf<typeof FRAGMENT_3312>;
type FragmentSelf3312 = NonNullable<FragmentResult3312>;

export type FragmentToken3312 =
  | FragmentSelf3312["__typename"]
  | FragmentSelf3312["typenameHint"] | FragmentToken3310 | FragmentToken3311;
