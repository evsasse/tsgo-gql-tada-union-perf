import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2191 } from "./fragment2191";
import type { FragmentToken2192 } from "./fragment2192";

export const FRAGMENT_2193 = gql(`
  fragment Fragment2193 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult2193 = ResultOf<typeof FRAGMENT_2193>;
type FragmentSelf2193 = NonNullable<FragmentResult2193>;

export type FragmentToken2193 =
  | FragmentSelf2193["__typename"]
  | FragmentSelf2193["typenameHint"] | FragmentToken2191 | FragmentToken2192;
