import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1289 } from "./fragment1289";
import type { FragmentToken1290 } from "./fragment1290";

export const FRAGMENT_1291 = gql(`
  fragment Fragment1291 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult1291 = ResultOf<typeof FRAGMENT_1291>;
type FragmentSelf1291 = NonNullable<FragmentResult1291>;

export type FragmentToken1291 =
  | FragmentSelf1291["__typename"]
  | FragmentSelf1291["typenameHint"] | FragmentToken1289 | FragmentToken1290;
