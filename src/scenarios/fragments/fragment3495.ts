import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3493 } from "./fragment3493";
import type { FragmentToken3494 } from "./fragment3494";

export const FRAGMENT_3495 = gql(`
  fragment Fragment3495 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult3495 = ResultOf<typeof FRAGMENT_3495>;
type FragmentSelf3495 = NonNullable<FragmentResult3495>;

export type FragmentToken3495 =
  | FragmentSelf3495["__typename"]
  | FragmentSelf3495["typenameHint"] | FragmentToken3493 | FragmentToken3494;
