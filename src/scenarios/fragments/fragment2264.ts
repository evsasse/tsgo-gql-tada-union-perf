import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2262 } from "./fragment2262";
import type { FragmentToken2263 } from "./fragment2263";

export const FRAGMENT_2264 = gql(`
  fragment Fragment2264 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult2264 = ResultOf<typeof FRAGMENT_2264>;
type FragmentSelf2264 = NonNullable<FragmentResult2264>;

export type FragmentToken2264 =
  | FragmentSelf2264["__typename"]
  | FragmentSelf2264["typenameHint"] | FragmentToken2262 | FragmentToken2263;
