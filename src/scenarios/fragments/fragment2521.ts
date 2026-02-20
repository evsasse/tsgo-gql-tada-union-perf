import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2519 } from "./fragment2519";
import type { FragmentToken2520 } from "./fragment2520";

export const FRAGMENT_2521 = gql(`
  fragment Fragment2521 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult2521 = ResultOf<typeof FRAGMENT_2521>;
type FragmentSelf2521 = NonNullable<FragmentResult2521>;

export type FragmentToken2521 =
  | FragmentSelf2521["__typename"]
  | FragmentSelf2521["typenameHint"] | FragmentToken2519 | FragmentToken2520;
