import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2480 } from "./fragment2480";
import type { FragmentToken2481 } from "./fragment2481";

export const FRAGMENT_2482 = gql(`
  fragment Fragment2482 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult2482 = ResultOf<typeof FRAGMENT_2482>;
type FragmentSelf2482 = NonNullable<FragmentResult2482>;

export type FragmentToken2482 =
  | FragmentSelf2482["__typename"]
  | FragmentSelf2482["typenameHint"] | FragmentToken2480 | FragmentToken2481;
