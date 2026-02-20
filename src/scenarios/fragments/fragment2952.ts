import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2950 } from "./fragment2950";
import type { FragmentToken2951 } from "./fragment2951";

export const FRAGMENT_2952 = gql(`
  fragment Fragment2952 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult2952 = ResultOf<typeof FRAGMENT_2952>;
type FragmentSelf2952 = NonNullable<FragmentResult2952>;

export type FragmentToken2952 =
  | FragmentSelf2952["__typename"]
  | FragmentSelf2952["typenameHint"] | FragmentToken2950 | FragmentToken2951;
