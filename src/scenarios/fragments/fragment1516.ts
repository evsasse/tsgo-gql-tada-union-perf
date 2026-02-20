import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1514 } from "./fragment1514";
import type { FragmentToken1515 } from "./fragment1515";

export const FRAGMENT_1516 = gql(`
  fragment Fragment1516 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult1516 = ResultOf<typeof FRAGMENT_1516>;
type FragmentSelf1516 = NonNullable<FragmentResult1516>;

export type FragmentToken1516 =
  | FragmentSelf1516["__typename"]
  | FragmentSelf1516["typenameHint"] | FragmentToken1514 | FragmentToken1515;
