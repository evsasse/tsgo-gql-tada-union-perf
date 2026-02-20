import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2998 } from "./fragment2998";
import type { FragmentToken2999 } from "./fragment2999";

export const FRAGMENT_3000 = gql(`
  fragment Fragment3000 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult3000 = ResultOf<typeof FRAGMENT_3000>;
type FragmentSelf3000 = NonNullable<FragmentResult3000>;

export type FragmentToken3000 =
  | FragmentSelf3000["__typename"]
  | FragmentSelf3000["typenameHint"] | FragmentToken2998 | FragmentToken2999;
