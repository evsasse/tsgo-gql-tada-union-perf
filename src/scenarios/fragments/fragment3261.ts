import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3259 } from "./fragment3259";
import type { FragmentToken3260 } from "./fragment3260";

export const FRAGMENT_3261 = gql(`
  fragment Fragment3261 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult3261 = ResultOf<typeof FRAGMENT_3261>;
type FragmentSelf3261 = NonNullable<FragmentResult3261>;

export type FragmentToken3261 =
  | FragmentSelf3261["__typename"]
  | FragmentSelf3261["typenameHint"] | FragmentToken3259 | FragmentToken3260;
