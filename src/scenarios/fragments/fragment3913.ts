import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3911 } from "./fragment3911";
import type { FragmentToken3912 } from "./fragment3912";

export const FRAGMENT_3913 = gql(`
  fragment Fragment3913 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult3913 = ResultOf<typeof FRAGMENT_3913>;
type FragmentSelf3913 = NonNullable<FragmentResult3913>;

export type FragmentToken3913 =
  | FragmentSelf3913["__typename"]
  | FragmentSelf3913["typenameHint"] | FragmentToken3911 | FragmentToken3912;
