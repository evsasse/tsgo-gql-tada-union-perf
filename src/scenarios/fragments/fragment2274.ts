import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2272 } from "./fragment2272";
import type { FragmentToken2273 } from "./fragment2273";

export const FRAGMENT_2274 = gql(`
  fragment Fragment2274 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult2274 = ResultOf<typeof FRAGMENT_2274>;
type FragmentSelf2274 = NonNullable<FragmentResult2274>;

export type FragmentToken2274 =
  | FragmentSelf2274["__typename"]
  | FragmentSelf2274["typenameHint"] | FragmentToken2272 | FragmentToken2273;
