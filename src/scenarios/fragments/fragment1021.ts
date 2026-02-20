import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1019 } from "./fragment1019";
import type { FragmentToken1020 } from "./fragment1020";

export const FRAGMENT_1021 = gql(`
  fragment Fragment1021 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult1021 = ResultOf<typeof FRAGMENT_1021>;
type FragmentSelf1021 = NonNullable<FragmentResult1021>;

export type FragmentToken1021 =
  | FragmentSelf1021["__typename"]
  | FragmentSelf1021["typenameHint"] | FragmentToken1019 | FragmentToken1020;
