import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3118 } from "./fragment3118";
import type { FragmentToken3119 } from "./fragment3119";

export const FRAGMENT_3120 = gql(`
  fragment Fragment3120 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult3120 = ResultOf<typeof FRAGMENT_3120>;
type FragmentSelf3120 = NonNullable<FragmentResult3120>;

export type FragmentToken3120 =
  | FragmentSelf3120["__typename"]
  | FragmentSelf3120["typenameHint"] | FragmentToken3118 | FragmentToken3119;
