import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2490 } from "./fragment2490";
import type { FragmentToken2491 } from "./fragment2491";

export const FRAGMENT_2492 = gql(`
  fragment Fragment2492 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult2492 = ResultOf<typeof FRAGMENT_2492>;
type FragmentSelf2492 = NonNullable<FragmentResult2492>;

export type FragmentToken2492 =
  | FragmentSelf2492["__typename"]
  | FragmentSelf2492["typenameHint"] | FragmentToken2490 | FragmentToken2491;
