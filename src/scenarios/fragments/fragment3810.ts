import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3808 } from "./fragment3808";
import type { FragmentToken3809 } from "./fragment3809";

export const FRAGMENT_3810 = gql(`
  fragment Fragment3810 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult3810 = ResultOf<typeof FRAGMENT_3810>;
type FragmentSelf3810 = NonNullable<FragmentResult3810>;

export type FragmentToken3810 =
  | FragmentSelf3810["__typename"]
  | FragmentSelf3810["typenameHint"] | FragmentToken3808 | FragmentToken3809;
