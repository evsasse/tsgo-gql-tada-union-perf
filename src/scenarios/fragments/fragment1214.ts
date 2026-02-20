import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1212 } from "./fragment1212";
import type { FragmentToken1213 } from "./fragment1213";

export const FRAGMENT_1214 = gql(`
  fragment Fragment1214 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult1214 = ResultOf<typeof FRAGMENT_1214>;
type FragmentSelf1214 = NonNullable<FragmentResult1214>;

export type FragmentToken1214 =
  | FragmentSelf1214["__typename"]
  | FragmentSelf1214["typenameHint"] | FragmentToken1212 | FragmentToken1213;
