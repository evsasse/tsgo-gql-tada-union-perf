import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1422 } from "./fragment1422";
import type { FragmentToken1423 } from "./fragment1423";

export const FRAGMENT_1424 = gql(`
  fragment Fragment1424 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult1424 = ResultOf<typeof FRAGMENT_1424>;
type FragmentSelf1424 = NonNullable<FragmentResult1424>;

export type FragmentToken1424 =
  | FragmentSelf1424["__typename"]
  | FragmentSelf1424["typenameHint"] | FragmentToken1422 | FragmentToken1423;
