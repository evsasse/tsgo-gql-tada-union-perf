import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken694 } from "./fragment694";
import type { FragmentToken695 } from "./fragment695";

export const FRAGMENT_696 = gql(`
  fragment Fragment696 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult696 = ResultOf<typeof FRAGMENT_696>;
type FragmentSelf696 = NonNullable<FragmentResult696>;

export type FragmentToken696 =
  | FragmentSelf696["__typename"]
  | FragmentSelf696["typenameHint"] | FragmentToken694 | FragmentToken695;
