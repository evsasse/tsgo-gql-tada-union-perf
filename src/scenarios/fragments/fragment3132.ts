import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3130 } from "./fragment3130";
import type { FragmentToken3131 } from "./fragment3131";

export const FRAGMENT_3132 = gql(`
  fragment Fragment3132 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult3132 = ResultOf<typeof FRAGMENT_3132>;
type FragmentSelf3132 = NonNullable<FragmentResult3132>;

export type FragmentToken3132 =
  | FragmentSelf3132["__typename"]
  | FragmentSelf3132["typenameHint"] | FragmentToken3130 | FragmentToken3131;
