import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2248 } from "./fragment2248";
import type { FragmentToken2249 } from "./fragment2249";

export const FRAGMENT_2250 = gql(`
  fragment Fragment2250 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult2250 = ResultOf<typeof FRAGMENT_2250>;
type FragmentSelf2250 = NonNullable<FragmentResult2250>;

export type FragmentToken2250 =
  | FragmentSelf2250["__typename"]
  | FragmentSelf2250["typenameHint"] | FragmentToken2248 | FragmentToken2249;
