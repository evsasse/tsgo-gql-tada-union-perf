import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3869 } from "./fragment3869";
import type { FragmentToken3870 } from "./fragment3870";

export const FRAGMENT_3871 = gql(`
  fragment Fragment3871 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult3871 = ResultOf<typeof FRAGMENT_3871>;
type FragmentSelf3871 = NonNullable<FragmentResult3871>;

export type FragmentToken3871 =
  | FragmentSelf3871["__typename"]
  | FragmentSelf3871["typenameHint"] | FragmentToken3869 | FragmentToken3870;
