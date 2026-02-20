import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken581 } from "./fragment581";
import type { FragmentToken582 } from "./fragment582";

export const FRAGMENT_583 = gql(`
  fragment Fragment583 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult583 = ResultOf<typeof FRAGMENT_583>;
type FragmentSelf583 = NonNullable<FragmentResult583>;

export type FragmentToken583 =
  | FragmentSelf583["__typename"]
  | FragmentSelf583["typenameHint"] | FragmentToken581 | FragmentToken582;
