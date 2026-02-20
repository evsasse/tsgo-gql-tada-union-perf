import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2801 } from "./fragment2801";
import type { FragmentToken2802 } from "./fragment2802";

export const FRAGMENT_2803 = gql(`
  fragment Fragment2803 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult2803 = ResultOf<typeof FRAGMENT_2803>;
type FragmentSelf2803 = NonNullable<FragmentResult2803>;

export type FragmentToken2803 =
  | FragmentSelf2803["__typename"]
  | FragmentSelf2803["typenameHint"] | FragmentToken2801 | FragmentToken2802;
