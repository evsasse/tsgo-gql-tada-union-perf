import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2211 } from "./fragment2211";
import type { FragmentToken2212 } from "./fragment2212";

export const FRAGMENT_2213 = gql(`
  fragment Fragment2213 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult2213 = ResultOf<typeof FRAGMENT_2213>;
type FragmentSelf2213 = NonNullable<FragmentResult2213>;

export type FragmentToken2213 =
  | FragmentSelf2213["__typename"]
  | FragmentSelf2213["typenameHint"] | FragmentToken2211 | FragmentToken2212;
