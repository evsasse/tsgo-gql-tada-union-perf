import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2139 } from "./fragment2139";
import type { FragmentToken2140 } from "./fragment2140";

export const FRAGMENT_2141 = gql(`
  fragment Fragment2141 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult2141 = ResultOf<typeof FRAGMENT_2141>;
type FragmentSelf2141 = NonNullable<FragmentResult2141>;

export type FragmentToken2141 =
  | FragmentSelf2141["__typename"]
  | FragmentSelf2141["typenameHint"] | FragmentToken2139 | FragmentToken2140;
