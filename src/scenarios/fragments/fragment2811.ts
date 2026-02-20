import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2809 } from "./fragment2809";
import type { FragmentToken2810 } from "./fragment2810";

export const FRAGMENT_2811 = gql(`
  fragment Fragment2811 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult2811 = ResultOf<typeof FRAGMENT_2811>;
type FragmentSelf2811 = NonNullable<FragmentResult2811>;

export type FragmentToken2811 =
  | FragmentSelf2811["__typename"]
  | FragmentSelf2811["typenameHint"] | FragmentToken2809 | FragmentToken2810;
