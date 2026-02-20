import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3222 } from "./fragment3222";
import type { FragmentToken3223 } from "./fragment3223";

export const FRAGMENT_3224 = gql(`
  fragment Fragment3224 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult3224 = ResultOf<typeof FRAGMENT_3224>;
type FragmentSelf3224 = NonNullable<FragmentResult3224>;

export type FragmentToken3224 =
  | FragmentSelf3224["__typename"]
  | FragmentSelf3224["typenameHint"] | FragmentToken3222 | FragmentToken3223;
