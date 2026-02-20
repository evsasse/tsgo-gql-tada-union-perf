import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1135 } from "./fragment1135";
import type { FragmentToken1136 } from "./fragment1136";

export const FRAGMENT_1137 = gql(`
  fragment Fragment1137 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult1137 = ResultOf<typeof FRAGMENT_1137>;
type FragmentSelf1137 = NonNullable<FragmentResult1137>;

export type FragmentToken1137 =
  | FragmentSelf1137["__typename"]
  | FragmentSelf1137["typenameHint"] | FragmentToken1135 | FragmentToken1136;
