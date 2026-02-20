import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken715 } from "./fragment715";
import type { FragmentToken716 } from "./fragment716";

export const FRAGMENT_717 = gql(`
  fragment Fragment717 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult717 = ResultOf<typeof FRAGMENT_717>;
type FragmentSelf717 = NonNullable<FragmentResult717>;

export type FragmentToken717 =
  | FragmentSelf717["__typename"]
  | FragmentSelf717["typenameHint"] | FragmentToken715 | FragmentToken716;
