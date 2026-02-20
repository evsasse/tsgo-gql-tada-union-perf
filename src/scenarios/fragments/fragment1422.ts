import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1420 } from "./fragment1420";
import type { FragmentToken1421 } from "./fragment1421";

export const FRAGMENT_1422 = gql(`
  fragment Fragment1422 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult1422 = ResultOf<typeof FRAGMENT_1422>;
type FragmentSelf1422 = NonNullable<FragmentResult1422>;

export type FragmentToken1422 =
  | FragmentSelf1422["__typename"]
  | FragmentSelf1422["typenameHint"] | FragmentToken1420 | FragmentToken1421;
