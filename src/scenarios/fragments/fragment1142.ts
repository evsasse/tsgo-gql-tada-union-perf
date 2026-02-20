import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1140 } from "./fragment1140";
import type { FragmentToken1141 } from "./fragment1141";

export const FRAGMENT_1142 = gql(`
  fragment Fragment1142 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult1142 = ResultOf<typeof FRAGMENT_1142>;
type FragmentSelf1142 = NonNullable<FragmentResult1142>;

export type FragmentToken1142 =
  | FragmentSelf1142["__typename"]
  | FragmentSelf1142["typenameHint"] | FragmentToken1140 | FragmentToken1141;
