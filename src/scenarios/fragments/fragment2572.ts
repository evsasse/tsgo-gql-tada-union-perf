import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2570 } from "./fragment2570";
import type { FragmentToken2571 } from "./fragment2571";

export const FRAGMENT_2572 = gql(`
  fragment Fragment2572 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult2572 = ResultOf<typeof FRAGMENT_2572>;
type FragmentSelf2572 = NonNullable<FragmentResult2572>;

export type FragmentToken2572 =
  | FragmentSelf2572["__typename"]
  | FragmentSelf2572["typenameHint"] | FragmentToken2570 | FragmentToken2571;
