import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3480 } from "./fragment3480";
import type { FragmentToken3481 } from "./fragment3481";

export const FRAGMENT_3482 = gql(`
  fragment Fragment3482 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult3482 = ResultOf<typeof FRAGMENT_3482>;
type FragmentSelf3482 = NonNullable<FragmentResult3482>;

export type FragmentToken3482 =
  | FragmentSelf3482["__typename"]
  | FragmentSelf3482["typenameHint"] | FragmentToken3480 | FragmentToken3481;
