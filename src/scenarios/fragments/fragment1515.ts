import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1513 } from "./fragment1513";
import type { FragmentToken1514 } from "./fragment1514";

export const FRAGMENT_1515 = gql(`
  fragment Fragment1515 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult1515 = ResultOf<typeof FRAGMENT_1515>;
type FragmentSelf1515 = NonNullable<FragmentResult1515>;

export type FragmentToken1515 =
  | FragmentSelf1515["__typename"]
  | FragmentSelf1515["typenameHint"] | FragmentToken1513 | FragmentToken1514;
