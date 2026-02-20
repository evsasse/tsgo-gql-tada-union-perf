import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2236 } from "./fragment2236";
import type { FragmentToken2237 } from "./fragment2237";

export const FRAGMENT_2238 = gql(`
  fragment Fragment2238 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult2238 = ResultOf<typeof FRAGMENT_2238>;
type FragmentSelf2238 = NonNullable<FragmentResult2238>;

export type FragmentToken2238 =
  | FragmentSelf2238["__typename"]
  | FragmentSelf2238["typenameHint"] | FragmentToken2236 | FragmentToken2237;
