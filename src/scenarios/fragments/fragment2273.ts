import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2271 } from "./fragment2271";
import type { FragmentToken2272 } from "./fragment2272";

export const FRAGMENT_2273 = gql(`
  fragment Fragment2273 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult2273 = ResultOf<typeof FRAGMENT_2273>;
type FragmentSelf2273 = NonNullable<FragmentResult2273>;

export type FragmentToken2273 =
  | FragmentSelf2273["__typename"]
  | FragmentSelf2273["typenameHint"] | FragmentToken2271 | FragmentToken2272;
