import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3093 } from "./fragment3093";
import type { FragmentToken3094 } from "./fragment3094";

export const FRAGMENT_3095 = gql(`
  fragment Fragment3095 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult3095 = ResultOf<typeof FRAGMENT_3095>;
type FragmentSelf3095 = NonNullable<FragmentResult3095>;

export type FragmentToken3095 =
  | FragmentSelf3095["__typename"]
  | FragmentSelf3095["typenameHint"] | FragmentToken3093 | FragmentToken3094;
