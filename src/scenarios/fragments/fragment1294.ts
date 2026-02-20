import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1292 } from "./fragment1292";
import type { FragmentToken1293 } from "./fragment1293";

export const FRAGMENT_1294 = gql(`
  fragment Fragment1294 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult1294 = ResultOf<typeof FRAGMENT_1294>;
type FragmentSelf1294 = NonNullable<FragmentResult1294>;

export type FragmentToken1294 =
  | FragmentSelf1294["__typename"]
  | FragmentSelf1294["typenameHint"] | FragmentToken1292 | FragmentToken1293;
