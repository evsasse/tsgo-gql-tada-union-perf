import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1293 } from "./fragment1293";
import type { FragmentToken1294 } from "./fragment1294";

export const FRAGMENT_1295 = gql(`
  fragment Fragment1295 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult1295 = ResultOf<typeof FRAGMENT_1295>;
type FragmentSelf1295 = NonNullable<FragmentResult1295>;

export type FragmentToken1295 =
  | FragmentSelf1295["__typename"]
  | FragmentSelf1295["typenameHint"] | FragmentToken1293 | FragmentToken1294;
