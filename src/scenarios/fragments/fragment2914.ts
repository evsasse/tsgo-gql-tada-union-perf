import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2912 } from "./fragment2912";
import type { FragmentToken2913 } from "./fragment2913";

export const FRAGMENT_2914 = gql(`
  fragment Fragment2914 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult2914 = ResultOf<typeof FRAGMENT_2914>;
type FragmentSelf2914 = NonNullable<FragmentResult2914>;

export type FragmentToken2914 =
  | FragmentSelf2914["__typename"]
  | FragmentSelf2914["typenameHint"] | FragmentToken2912 | FragmentToken2913;
