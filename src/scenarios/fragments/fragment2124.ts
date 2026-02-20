import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2122 } from "./fragment2122";
import type { FragmentToken2123 } from "./fragment2123";

export const FRAGMENT_2124 = gql(`
  fragment Fragment2124 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult2124 = ResultOf<typeof FRAGMENT_2124>;
type FragmentSelf2124 = NonNullable<FragmentResult2124>;

export type FragmentToken2124 =
  | FragmentSelf2124["__typename"]
  | FragmentSelf2124["typenameHint"] | FragmentToken2122 | FragmentToken2123;
