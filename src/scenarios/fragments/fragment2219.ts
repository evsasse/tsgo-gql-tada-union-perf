import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2217 } from "./fragment2217";
import type { FragmentToken2218 } from "./fragment2218";

export const FRAGMENT_2219 = gql(`
  fragment Fragment2219 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult2219 = ResultOf<typeof FRAGMENT_2219>;
type FragmentSelf2219 = NonNullable<FragmentResult2219>;

export type FragmentToken2219 =
  | FragmentSelf2219["__typename"]
  | FragmentSelf2219["typenameHint"] | FragmentToken2217 | FragmentToken2218;
