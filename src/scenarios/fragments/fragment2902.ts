import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2900 } from "./fragment2900";
import type { FragmentToken2901 } from "./fragment2901";

export const FRAGMENT_2902 = gql(`
  fragment Fragment2902 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult2902 = ResultOf<typeof FRAGMENT_2902>;
type FragmentSelf2902 = NonNullable<FragmentResult2902>;

export type FragmentToken2902 =
  | FragmentSelf2902["__typename"]
  | FragmentSelf2902["typenameHint"] | FragmentToken2900 | FragmentToken2901;
