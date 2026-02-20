import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3323 } from "./fragment3323";
import type { FragmentToken3324 } from "./fragment3324";

export const FRAGMENT_3325 = gql(`
  fragment Fragment3325 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult3325 = ResultOf<typeof FRAGMENT_3325>;
type FragmentSelf3325 = NonNullable<FragmentResult3325>;

export type FragmentToken3325 =
  | FragmentSelf3325["__typename"]
  | FragmentSelf3325["typenameHint"] | FragmentToken3323 | FragmentToken3324;
