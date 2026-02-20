import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3516 } from "./fragment3516";
import type { FragmentToken3517 } from "./fragment3517";

export const FRAGMENT_3518 = gql(`
  fragment Fragment3518 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult3518 = ResultOf<typeof FRAGMENT_3518>;
type FragmentSelf3518 = NonNullable<FragmentResult3518>;

export type FragmentToken3518 =
  | FragmentSelf3518["__typename"]
  | FragmentSelf3518["typenameHint"] | FragmentToken3516 | FragmentToken3517;
