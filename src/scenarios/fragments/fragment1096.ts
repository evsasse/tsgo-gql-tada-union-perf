import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1094 } from "./fragment1094";
import type { FragmentToken1095 } from "./fragment1095";

export const FRAGMENT_1096 = gql(`
  fragment Fragment1096 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult1096 = ResultOf<typeof FRAGMENT_1096>;
type FragmentSelf1096 = NonNullable<FragmentResult1096>;

export type FragmentToken1096 =
  | FragmentSelf1096["__typename"]
  | FragmentSelf1096["typenameHint"] | FragmentToken1094 | FragmentToken1095;
