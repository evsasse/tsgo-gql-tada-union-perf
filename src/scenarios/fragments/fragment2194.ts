import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2192 } from "./fragment2192";
import type { FragmentToken2193 } from "./fragment2193";

export const FRAGMENT_2194 = gql(`
  fragment Fragment2194 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult2194 = ResultOf<typeof FRAGMENT_2194>;
type FragmentSelf2194 = NonNullable<FragmentResult2194>;

export type FragmentToken2194 =
  | FragmentSelf2194["__typename"]
  | FragmentSelf2194["typenameHint"] | FragmentToken2192 | FragmentToken2193;
