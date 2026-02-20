import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2357 } from "./fragment2357";
import type { FragmentToken2358 } from "./fragment2358";

export const FRAGMENT_2359 = gql(`
  fragment Fragment2359 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult2359 = ResultOf<typeof FRAGMENT_2359>;
type FragmentSelf2359 = NonNullable<FragmentResult2359>;

export type FragmentToken2359 =
  | FragmentSelf2359["__typename"]
  | FragmentSelf2359["typenameHint"] | FragmentToken2357 | FragmentToken2358;
