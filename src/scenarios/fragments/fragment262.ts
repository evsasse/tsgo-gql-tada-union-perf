import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken260 } from "./fragment260";
import type { FragmentToken261 } from "./fragment261";

export const FRAGMENT_262 = gql(`
  fragment Fragment262 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult262 = ResultOf<typeof FRAGMENT_262>;
type FragmentSelf262 = NonNullable<FragmentResult262>;

export type FragmentToken262 =
  | FragmentSelf262["__typename"]
  | FragmentSelf262["typenameHint"] | FragmentToken260 | FragmentToken261;
