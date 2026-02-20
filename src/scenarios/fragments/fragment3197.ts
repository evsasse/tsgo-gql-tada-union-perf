import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3195 } from "./fragment3195";
import type { FragmentToken3196 } from "./fragment3196";

export const FRAGMENT_3197 = gql(`
  fragment Fragment3197 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult3197 = ResultOf<typeof FRAGMENT_3197>;
type FragmentSelf3197 = NonNullable<FragmentResult3197>;

export type FragmentToken3197 =
  | FragmentSelf3197["__typename"]
  | FragmentSelf3197["typenameHint"] | FragmentToken3195 | FragmentToken3196;
