import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2359 } from "./fragment2359";
import type { FragmentToken2360 } from "./fragment2360";

export const FRAGMENT_2361 = gql(`
  fragment Fragment2361 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult2361 = ResultOf<typeof FRAGMENT_2361>;
type FragmentSelf2361 = NonNullable<FragmentResult2361>;

export type FragmentToken2361 =
  | FragmentSelf2361["__typename"]
  | FragmentSelf2361["typenameHint"] | FragmentToken2359 | FragmentToken2360;
