import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4193 } from "./fragment4193";
import type { FragmentToken4194 } from "./fragment4194";

export const FRAGMENT_4195 = gql(`
  fragment Fragment4195 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult4195 = ResultOf<typeof FRAGMENT_4195>;
type FragmentSelf4195 = NonNullable<FragmentResult4195>;

export type FragmentToken4195 =
  | FragmentSelf4195["__typename"]
  | FragmentSelf4195["typenameHint"] | FragmentToken4193 | FragmentToken4194;
