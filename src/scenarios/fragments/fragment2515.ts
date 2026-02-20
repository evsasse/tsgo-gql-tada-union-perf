import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2513 } from "./fragment2513";
import type { FragmentToken2514 } from "./fragment2514";

export const FRAGMENT_2515 = gql(`
  fragment Fragment2515 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult2515 = ResultOf<typeof FRAGMENT_2515>;
type FragmentSelf2515 = NonNullable<FragmentResult2515>;

export type FragmentToken2515 =
  | FragmentSelf2515["__typename"]
  | FragmentSelf2515["typenameHint"] | FragmentToken2513 | FragmentToken2514;
