import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2960 } from "./fragment2960";
import type { FragmentToken2961 } from "./fragment2961";

export const FRAGMENT_2962 = gql(`
  fragment Fragment2962 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult2962 = ResultOf<typeof FRAGMENT_2962>;
type FragmentSelf2962 = NonNullable<FragmentResult2962>;

export type FragmentToken2962 =
  | FragmentSelf2962["__typename"]
  | FragmentSelf2962["typenameHint"] | FragmentToken2960 | FragmentToken2961;
