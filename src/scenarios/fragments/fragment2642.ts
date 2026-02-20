import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2640 } from "./fragment2640";
import type { FragmentToken2641 } from "./fragment2641";

export const FRAGMENT_2642 = gql(`
  fragment Fragment2642 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult2642 = ResultOf<typeof FRAGMENT_2642>;
type FragmentSelf2642 = NonNullable<FragmentResult2642>;

export type FragmentToken2642 =
  | FragmentSelf2642["__typename"]
  | FragmentSelf2642["typenameHint"] | FragmentToken2640 | FragmentToken2641;
