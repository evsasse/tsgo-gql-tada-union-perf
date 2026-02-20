import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3043 } from "./fragment3043";
import type { FragmentToken3044 } from "./fragment3044";

export const FRAGMENT_3045 = gql(`
  fragment Fragment3045 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult3045 = ResultOf<typeof FRAGMENT_3045>;
type FragmentSelf3045 = NonNullable<FragmentResult3045>;

export type FragmentToken3045 =
  | FragmentSelf3045["__typename"]
  | FragmentSelf3045["typenameHint"] | FragmentToken3043 | FragmentToken3044;
