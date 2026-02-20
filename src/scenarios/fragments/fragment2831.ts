import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2829 } from "./fragment2829";
import type { FragmentToken2830 } from "./fragment2830";

export const FRAGMENT_2831 = gql(`
  fragment Fragment2831 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult2831 = ResultOf<typeof FRAGMENT_2831>;
type FragmentSelf2831 = NonNullable<FragmentResult2831>;

export type FragmentToken2831 =
  | FragmentSelf2831["__typename"]
  | FragmentSelf2831["typenameHint"] | FragmentToken2829 | FragmentToken2830;
