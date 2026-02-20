import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2949 } from "./fragment2949";
import type { FragmentToken2950 } from "./fragment2950";

export const FRAGMENT_2951 = gql(`
  fragment Fragment2951 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult2951 = ResultOf<typeof FRAGMENT_2951>;
type FragmentSelf2951 = NonNullable<FragmentResult2951>;

export type FragmentToken2951 =
  | FragmentSelf2951["__typename"]
  | FragmentSelf2951["typenameHint"] | FragmentToken2949 | FragmentToken2950;
