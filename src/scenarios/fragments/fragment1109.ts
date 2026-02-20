import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1107 } from "./fragment1107";
import type { FragmentToken1108 } from "./fragment1108";

export const FRAGMENT_1109 = gql(`
  fragment Fragment1109 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult1109 = ResultOf<typeof FRAGMENT_1109>;
type FragmentSelf1109 = NonNullable<FragmentResult1109>;

export type FragmentToken1109 =
  | FragmentSelf1109["__typename"]
  | FragmentSelf1109["typenameHint"] | FragmentToken1107 | FragmentToken1108;
