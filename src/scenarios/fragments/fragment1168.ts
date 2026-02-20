import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1166 } from "./fragment1166";
import type { FragmentToken1167 } from "./fragment1167";

export const FRAGMENT_1168 = gql(`
  fragment Fragment1168 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult1168 = ResultOf<typeof FRAGMENT_1168>;
type FragmentSelf1168 = NonNullable<FragmentResult1168>;

export type FragmentToken1168 =
  | FragmentSelf1168["__typename"]
  | FragmentSelf1168["typenameHint"] | FragmentToken1166 | FragmentToken1167;
