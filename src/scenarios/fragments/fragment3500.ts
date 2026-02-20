import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3498 } from "./fragment3498";
import type { FragmentToken3499 } from "./fragment3499";

export const FRAGMENT_3500 = gql(`
  fragment Fragment3500 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult3500 = ResultOf<typeof FRAGMENT_3500>;
type FragmentSelf3500 = NonNullable<FragmentResult3500>;

export type FragmentToken3500 =
  | FragmentSelf3500["__typename"]
  | FragmentSelf3500["typenameHint"] | FragmentToken3498 | FragmentToken3499;
