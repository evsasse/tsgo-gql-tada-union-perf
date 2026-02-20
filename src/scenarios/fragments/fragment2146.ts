import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2144 } from "./fragment2144";
import type { FragmentToken2145 } from "./fragment2145";

export const FRAGMENT_2146 = gql(`
  fragment Fragment2146 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult2146 = ResultOf<typeof FRAGMENT_2146>;
type FragmentSelf2146 = NonNullable<FragmentResult2146>;

export type FragmentToken2146 =
  | FragmentSelf2146["__typename"]
  | FragmentSelf2146["typenameHint"] | FragmentToken2144 | FragmentToken2145;
