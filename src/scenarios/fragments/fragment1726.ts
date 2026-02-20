import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1724 } from "./fragment1724";
import type { FragmentToken1725 } from "./fragment1725";

export const FRAGMENT_1726 = gql(`
  fragment Fragment1726 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult1726 = ResultOf<typeof FRAGMENT_1726>;
type FragmentSelf1726 = NonNullable<FragmentResult1726>;

export type FragmentToken1726 =
  | FragmentSelf1726["__typename"]
  | FragmentSelf1726["typenameHint"] | FragmentToken1724 | FragmentToken1725;
