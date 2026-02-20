import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3042 } from "./fragment3042";
import type { FragmentToken3043 } from "./fragment3043";

export const FRAGMENT_3044 = gql(`
  fragment Fragment3044 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult3044 = ResultOf<typeof FRAGMENT_3044>;
type FragmentSelf3044 = NonNullable<FragmentResult3044>;

export type FragmentToken3044 =
  | FragmentSelf3044["__typename"]
  | FragmentSelf3044["typenameHint"] | FragmentToken3042 | FragmentToken3043;
