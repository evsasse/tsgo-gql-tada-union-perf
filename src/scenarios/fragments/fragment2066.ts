import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2064 } from "./fragment2064";
import type { FragmentToken2065 } from "./fragment2065";

export const FRAGMENT_2066 = gql(`
  fragment Fragment2066 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult2066 = ResultOf<typeof FRAGMENT_2066>;
type FragmentSelf2066 = NonNullable<FragmentResult2066>;

export type FragmentToken2066 =
  | FragmentSelf2066["__typename"]
  | FragmentSelf2066["typenameHint"] | FragmentToken2064 | FragmentToken2065;
