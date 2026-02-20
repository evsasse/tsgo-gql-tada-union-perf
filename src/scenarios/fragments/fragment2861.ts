import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2859 } from "./fragment2859";
import type { FragmentToken2860 } from "./fragment2860";

export const FRAGMENT_2861 = gql(`
  fragment Fragment2861 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult2861 = ResultOf<typeof FRAGMENT_2861>;
type FragmentSelf2861 = NonNullable<FragmentResult2861>;

export type FragmentToken2861 =
  | FragmentSelf2861["__typename"]
  | FragmentSelf2861["typenameHint"] | FragmentToken2859 | FragmentToken2860;
