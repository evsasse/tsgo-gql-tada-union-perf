import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2381 } from "./fragment2381";
import type { FragmentToken2382 } from "./fragment2382";

export const FRAGMENT_2383 = gql(`
  fragment Fragment2383 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult2383 = ResultOf<typeof FRAGMENT_2383>;
type FragmentSelf2383 = NonNullable<FragmentResult2383>;

export type FragmentToken2383 =
  | FragmentSelf2383["__typename"]
  | FragmentSelf2383["typenameHint"] | FragmentToken2381 | FragmentToken2382;
