import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3481 } from "./fragment3481";
import type { FragmentToken3482 } from "./fragment3482";

export const FRAGMENT_3483 = gql(`
  fragment Fragment3483 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult3483 = ResultOf<typeof FRAGMENT_3483>;
type FragmentSelf3483 = NonNullable<FragmentResult3483>;

export type FragmentToken3483 =
  | FragmentSelf3483["__typename"]
  | FragmentSelf3483["typenameHint"] | FragmentToken3481 | FragmentToken3482;
