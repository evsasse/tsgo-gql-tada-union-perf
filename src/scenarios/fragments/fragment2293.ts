import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2291 } from "./fragment2291";
import type { FragmentToken2292 } from "./fragment2292";

export const FRAGMENT_2293 = gql(`
  fragment Fragment2293 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult2293 = ResultOf<typeof FRAGMENT_2293>;
type FragmentSelf2293 = NonNullable<FragmentResult2293>;

export type FragmentToken2293 =
  | FragmentSelf2293["__typename"]
  | FragmentSelf2293["typenameHint"] | FragmentToken2291 | FragmentToken2292;
