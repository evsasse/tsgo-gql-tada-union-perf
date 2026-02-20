import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1134 } from "./fragment1134";
import type { FragmentToken1135 } from "./fragment1135";

export const FRAGMENT_1136 = gql(`
  fragment Fragment1136 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult1136 = ResultOf<typeof FRAGMENT_1136>;
type FragmentSelf1136 = NonNullable<FragmentResult1136>;

export type FragmentToken1136 =
  | FragmentSelf1136["__typename"]
  | FragmentSelf1136["typenameHint"] | FragmentToken1134 | FragmentToken1135;
