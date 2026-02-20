import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1268 } from "./fragment1268";
import type { FragmentToken1269 } from "./fragment1269";

export const FRAGMENT_1270 = gql(`
  fragment Fragment1270 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult1270 = ResultOf<typeof FRAGMENT_1270>;
type FragmentSelf1270 = NonNullable<FragmentResult1270>;

export type FragmentToken1270 =
  | FragmentSelf1270["__typename"]
  | FragmentSelf1270["typenameHint"] | FragmentToken1268 | FragmentToken1269;
