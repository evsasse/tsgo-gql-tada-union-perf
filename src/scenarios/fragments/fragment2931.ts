import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2929 } from "./fragment2929";
import type { FragmentToken2930 } from "./fragment2930";

export const FRAGMENT_2931 = gql(`
  fragment Fragment2931 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult2931 = ResultOf<typeof FRAGMENT_2931>;
type FragmentSelf2931 = NonNullable<FragmentResult2931>;

export type FragmentToken2931 =
  | FragmentSelf2931["__typename"]
  | FragmentSelf2931["typenameHint"] | FragmentToken2929 | FragmentToken2930;
