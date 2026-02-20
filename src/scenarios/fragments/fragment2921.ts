import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2919 } from "./fragment2919";
import type { FragmentToken2920 } from "./fragment2920";

export const FRAGMENT_2921 = gql(`
  fragment Fragment2921 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult2921 = ResultOf<typeof FRAGMENT_2921>;
type FragmentSelf2921 = NonNullable<FragmentResult2921>;

export type FragmentToken2921 =
  | FragmentSelf2921["__typename"]
  | FragmentSelf2921["typenameHint"] | FragmentToken2919 | FragmentToken2920;
