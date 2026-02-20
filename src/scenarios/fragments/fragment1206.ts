import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1204 } from "./fragment1204";
import type { FragmentToken1205 } from "./fragment1205";

export const FRAGMENT_1206 = gql(`
  fragment Fragment1206 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult1206 = ResultOf<typeof FRAGMENT_1206>;
type FragmentSelf1206 = NonNullable<FragmentResult1206>;

export type FragmentToken1206 =
  | FragmentSelf1206["__typename"]
  | FragmentSelf1206["typenameHint"] | FragmentToken1204 | FragmentToken1205;
