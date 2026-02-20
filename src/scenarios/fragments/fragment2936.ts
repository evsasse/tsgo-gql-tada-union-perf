import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2934 } from "./fragment2934";
import type { FragmentToken2935 } from "./fragment2935";

export const FRAGMENT_2936 = gql(`
  fragment Fragment2936 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult2936 = ResultOf<typeof FRAGMENT_2936>;
type FragmentSelf2936 = NonNullable<FragmentResult2936>;

export type FragmentToken2936 =
  | FragmentSelf2936["__typename"]
  | FragmentSelf2936["typenameHint"] | FragmentToken2934 | FragmentToken2935;
