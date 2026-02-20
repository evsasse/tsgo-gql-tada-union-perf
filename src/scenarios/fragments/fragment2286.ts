import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2284 } from "./fragment2284";
import type { FragmentToken2285 } from "./fragment2285";

export const FRAGMENT_2286 = gql(`
  fragment Fragment2286 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult2286 = ResultOf<typeof FRAGMENT_2286>;
type FragmentSelf2286 = NonNullable<FragmentResult2286>;

export type FragmentToken2286 =
  | FragmentSelf2286["__typename"]
  | FragmentSelf2286["typenameHint"] | FragmentToken2284 | FragmentToken2285;
