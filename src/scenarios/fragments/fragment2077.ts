import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2075 } from "./fragment2075";
import type { FragmentToken2076 } from "./fragment2076";

export const FRAGMENT_2077 = gql(`
  fragment Fragment2077 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult2077 = ResultOf<typeof FRAGMENT_2077>;
type FragmentSelf2077 = NonNullable<FragmentResult2077>;

export type FragmentToken2077 =
  | FragmentSelf2077["__typename"]
  | FragmentSelf2077["typenameHint"] | FragmentToken2075 | FragmentToken2076;
