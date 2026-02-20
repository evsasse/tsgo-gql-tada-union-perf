import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2901 } from "./fragment2901";
import type { FragmentToken2902 } from "./fragment2902";

export const FRAGMENT_2903 = gql(`
  fragment Fragment2903 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult2903 = ResultOf<typeof FRAGMENT_2903>;
type FragmentSelf2903 = NonNullable<FragmentResult2903>;

export type FragmentToken2903 =
  | FragmentSelf2903["__typename"]
  | FragmentSelf2903["typenameHint"] | FragmentToken2901 | FragmentToken2902;
