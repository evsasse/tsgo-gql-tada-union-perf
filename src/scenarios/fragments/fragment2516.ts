import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2514 } from "./fragment2514";
import type { FragmentToken2515 } from "./fragment2515";

export const FRAGMENT_2516 = gql(`
  fragment Fragment2516 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult2516 = ResultOf<typeof FRAGMENT_2516>;
type FragmentSelf2516 = NonNullable<FragmentResult2516>;

export type FragmentToken2516 =
  | FragmentSelf2516["__typename"]
  | FragmentSelf2516["typenameHint"] | FragmentToken2514 | FragmentToken2515;
