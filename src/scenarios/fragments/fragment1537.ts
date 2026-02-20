import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1535 } from "./fragment1535";
import type { FragmentToken1536 } from "./fragment1536";

export const FRAGMENT_1537 = gql(`
  fragment Fragment1537 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult1537 = ResultOf<typeof FRAGMENT_1537>;
type FragmentSelf1537 = NonNullable<FragmentResult1537>;

export type FragmentToken1537 =
  | FragmentSelf1537["__typename"]
  | FragmentSelf1537["typenameHint"] | FragmentToken1535 | FragmentToken1536;
