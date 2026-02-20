import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2967 } from "./fragment2967";
import type { FragmentToken2968 } from "./fragment2968";

export const FRAGMENT_2969 = gql(`
  fragment Fragment2969 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult2969 = ResultOf<typeof FRAGMENT_2969>;
type FragmentSelf2969 = NonNullable<FragmentResult2969>;

export type FragmentToken2969 =
  | FragmentSelf2969["__typename"]
  | FragmentSelf2969["typenameHint"] | FragmentToken2967 | FragmentToken2968;
