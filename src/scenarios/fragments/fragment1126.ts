import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1124 } from "./fragment1124";
import type { FragmentToken1125 } from "./fragment1125";

export const FRAGMENT_1126 = gql(`
  fragment Fragment1126 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult1126 = ResultOf<typeof FRAGMENT_1126>;
type FragmentSelf1126 = NonNullable<FragmentResult1126>;

export type FragmentToken1126 =
  | FragmentSelf1126["__typename"]
  | FragmentSelf1126["typenameHint"] | FragmentToken1124 | FragmentToken1125;
