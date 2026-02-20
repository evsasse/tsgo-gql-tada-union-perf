import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3309 } from "./fragment3309";
import type { FragmentToken3310 } from "./fragment3310";

export const FRAGMENT_3311 = gql(`
  fragment Fragment3311 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult3311 = ResultOf<typeof FRAGMENT_3311>;
type FragmentSelf3311 = NonNullable<FragmentResult3311>;

export type FragmentToken3311 =
  | FragmentSelf3311["__typename"]
  | FragmentSelf3311["typenameHint"] | FragmentToken3309 | FragmentToken3310;
