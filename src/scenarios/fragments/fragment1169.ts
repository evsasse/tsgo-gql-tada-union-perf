import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1167 } from "./fragment1167";
import type { FragmentToken1168 } from "./fragment1168";

export const FRAGMENT_1169 = gql(`
  fragment Fragment1169 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult1169 = ResultOf<typeof FRAGMENT_1169>;
type FragmentSelf1169 = NonNullable<FragmentResult1169>;

export type FragmentToken1169 =
  | FragmentSelf1169["__typename"]
  | FragmentSelf1169["typenameHint"] | FragmentToken1167 | FragmentToken1168;
