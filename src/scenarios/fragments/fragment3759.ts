import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3757 } from "./fragment3757";
import type { FragmentToken3758 } from "./fragment3758";

export const FRAGMENT_3759 = gql(`
  fragment Fragment3759 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult3759 = ResultOf<typeof FRAGMENT_3759>;
type FragmentSelf3759 = NonNullable<FragmentResult3759>;

export type FragmentToken3759 =
  | FragmentSelf3759["__typename"]
  | FragmentSelf3759["typenameHint"] | FragmentToken3757 | FragmentToken3758;
