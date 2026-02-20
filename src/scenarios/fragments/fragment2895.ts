import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2893 } from "./fragment2893";
import type { FragmentToken2894 } from "./fragment2894";

export const FRAGMENT_2895 = gql(`
  fragment Fragment2895 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult2895 = ResultOf<typeof FRAGMENT_2895>;
type FragmentSelf2895 = NonNullable<FragmentResult2895>;

export type FragmentToken2895 =
  | FragmentSelf2895["__typename"]
  | FragmentSelf2895["typenameHint"] | FragmentToken2893 | FragmentToken2894;
