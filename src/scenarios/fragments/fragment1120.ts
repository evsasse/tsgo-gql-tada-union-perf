import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1118 } from "./fragment1118";
import type { FragmentToken1119 } from "./fragment1119";

export const FRAGMENT_1120 = gql(`
  fragment Fragment1120 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult1120 = ResultOf<typeof FRAGMENT_1120>;
type FragmentSelf1120 = NonNullable<FragmentResult1120>;

export type FragmentToken1120 =
  | FragmentSelf1120["__typename"]
  | FragmentSelf1120["typenameHint"] | FragmentToken1118 | FragmentToken1119;
