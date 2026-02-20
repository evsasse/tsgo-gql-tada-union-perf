import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2277 } from "./fragment2277";
import type { FragmentToken2278 } from "./fragment2278";

export const FRAGMENT_2279 = gql(`
  fragment Fragment2279 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult2279 = ResultOf<typeof FRAGMENT_2279>;
type FragmentSelf2279 = NonNullable<FragmentResult2279>;

export type FragmentToken2279 =
  | FragmentSelf2279["__typename"]
  | FragmentSelf2279["typenameHint"] | FragmentToken2277 | FragmentToken2278;
