import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3314 } from "./fragment3314";
import type { FragmentToken3315 } from "./fragment3315";

export const FRAGMENT_3316 = gql(`
  fragment Fragment3316 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult3316 = ResultOf<typeof FRAGMENT_3316>;
type FragmentSelf3316 = NonNullable<FragmentResult3316>;

export type FragmentToken3316 =
  | FragmentSelf3316["__typename"]
  | FragmentSelf3316["typenameHint"] | FragmentToken3314 | FragmentToken3315;
