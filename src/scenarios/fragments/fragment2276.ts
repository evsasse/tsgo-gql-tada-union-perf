import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2274 } from "./fragment2274";
import type { FragmentToken2275 } from "./fragment2275";

export const FRAGMENT_2276 = gql(`
  fragment Fragment2276 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult2276 = ResultOf<typeof FRAGMENT_2276>;
type FragmentSelf2276 = NonNullable<FragmentResult2276>;

export type FragmentToken2276 =
  | FragmentSelf2276["__typename"]
  | FragmentSelf2276["typenameHint"] | FragmentToken2274 | FragmentToken2275;
