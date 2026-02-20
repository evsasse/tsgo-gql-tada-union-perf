import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2375 } from "./fragment2375";
import type { FragmentToken2376 } from "./fragment2376";

export const FRAGMENT_2377 = gql(`
  fragment Fragment2377 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult2377 = ResultOf<typeof FRAGMENT_2377>;
type FragmentSelf2377 = NonNullable<FragmentResult2377>;

export type FragmentToken2377 =
  | FragmentSelf2377["__typename"]
  | FragmentSelf2377["typenameHint"] | FragmentToken2375 | FragmentToken2376;
