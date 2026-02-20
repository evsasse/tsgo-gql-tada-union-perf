import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2571 } from "./fragment2571";
import type { FragmentToken2572 } from "./fragment2572";

export const FRAGMENT_2573 = gql(`
  fragment Fragment2573 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult2573 = ResultOf<typeof FRAGMENT_2573>;
type FragmentSelf2573 = NonNullable<FragmentResult2573>;

export type FragmentToken2573 =
  | FragmentSelf2573["__typename"]
  | FragmentSelf2573["typenameHint"] | FragmentToken2571 | FragmentToken2572;
