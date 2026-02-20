import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3514 } from "./fragment3514";
import type { FragmentToken3515 } from "./fragment3515";

export const FRAGMENT_3516 = gql(`
  fragment Fragment3516 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult3516 = ResultOf<typeof FRAGMENT_3516>;
type FragmentSelf3516 = NonNullable<FragmentResult3516>;

export type FragmentToken3516 =
  | FragmentSelf3516["__typename"]
  | FragmentSelf3516["typenameHint"] | FragmentToken3514 | FragmentToken3515;
