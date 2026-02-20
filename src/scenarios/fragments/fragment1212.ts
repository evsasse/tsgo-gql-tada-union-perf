import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1210 } from "./fragment1210";
import type { FragmentToken1211 } from "./fragment1211";

export const FRAGMENT_1212 = gql(`
  fragment Fragment1212 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult1212 = ResultOf<typeof FRAGMENT_1212>;
type FragmentSelf1212 = NonNullable<FragmentResult1212>;

export type FragmentToken1212 =
  | FragmentSelf1212["__typename"]
  | FragmentSelf1212["typenameHint"] | FragmentToken1210 | FragmentToken1211;
