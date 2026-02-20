import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1610 } from "./fragment1610";
import type { FragmentToken1611 } from "./fragment1611";

export const FRAGMENT_1612 = gql(`
  fragment Fragment1612 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult1612 = ResultOf<typeof FRAGMENT_1612>;
type FragmentSelf1612 = NonNullable<FragmentResult1612>;

export type FragmentToken1612 =
  | FragmentSelf1612["__typename"]
  | FragmentSelf1612["typenameHint"] | FragmentToken1610 | FragmentToken1611;
