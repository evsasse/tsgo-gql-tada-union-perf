import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2390 } from "./fragment2390";
import type { FragmentToken2391 } from "./fragment2391";

export const FRAGMENT_2392 = gql(`
  fragment Fragment2392 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult2392 = ResultOf<typeof FRAGMENT_2392>;
type FragmentSelf2392 = NonNullable<FragmentResult2392>;

export type FragmentToken2392 =
  | FragmentSelf2392["__typename"]
  | FragmentSelf2392["typenameHint"] | FragmentToken2390 | FragmentToken2391;
