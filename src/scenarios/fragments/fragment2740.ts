import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2738 } from "./fragment2738";
import type { FragmentToken2739 } from "./fragment2739";

export const FRAGMENT_2740 = gql(`
  fragment Fragment2740 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult2740 = ResultOf<typeof FRAGMENT_2740>;
type FragmentSelf2740 = NonNullable<FragmentResult2740>;

export type FragmentToken2740 =
  | FragmentSelf2740["__typename"]
  | FragmentSelf2740["typenameHint"] | FragmentToken2738 | FragmentToken2739;
