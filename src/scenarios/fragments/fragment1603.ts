import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1601 } from "./fragment1601";
import type { FragmentToken1602 } from "./fragment1602";

export const FRAGMENT_1603 = gql(`
  fragment Fragment1603 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult1603 = ResultOf<typeof FRAGMENT_1603>;
type FragmentSelf1603 = NonNullable<FragmentResult1603>;

export type FragmentToken1603 =
  | FragmentSelf1603["__typename"]
  | FragmentSelf1603["typenameHint"] | FragmentToken1601 | FragmentToken1602;
