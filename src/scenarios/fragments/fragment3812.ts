import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3810 } from "./fragment3810";
import type { FragmentToken3811 } from "./fragment3811";

export const FRAGMENT_3812 = gql(`
  fragment Fragment3812 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult3812 = ResultOf<typeof FRAGMENT_3812>;
type FragmentSelf3812 = NonNullable<FragmentResult3812>;

export type FragmentToken3812 =
  | FragmentSelf3812["__typename"]
  | FragmentSelf3812["typenameHint"] | FragmentToken3810 | FragmentToken3811;
