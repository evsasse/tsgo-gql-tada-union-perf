import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2078 } from "./fragment2078";
import type { FragmentToken2079 } from "./fragment2079";

export const FRAGMENT_2080 = gql(`
  fragment Fragment2080 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult2080 = ResultOf<typeof FRAGMENT_2080>;
type FragmentSelf2080 = NonNullable<FragmentResult2080>;

export type FragmentToken2080 =
  | FragmentSelf2080["__typename"]
  | FragmentSelf2080["typenameHint"] | FragmentToken2078 | FragmentToken2079;
