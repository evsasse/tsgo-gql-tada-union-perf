import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2966 } from "./fragment2966";
import type { FragmentToken2967 } from "./fragment2967";

export const FRAGMENT_2968 = gql(`
  fragment Fragment2968 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult2968 = ResultOf<typeof FRAGMENT_2968>;
type FragmentSelf2968 = NonNullable<FragmentResult2968>;

export type FragmentToken2968 =
  | FragmentSelf2968["__typename"]
  | FragmentSelf2968["typenameHint"] | FragmentToken2966 | FragmentToken2967;
