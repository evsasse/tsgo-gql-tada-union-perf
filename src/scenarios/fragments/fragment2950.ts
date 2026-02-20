import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2948 } from "./fragment2948";
import type { FragmentToken2949 } from "./fragment2949";

export const FRAGMENT_2950 = gql(`
  fragment Fragment2950 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult2950 = ResultOf<typeof FRAGMENT_2950>;
type FragmentSelf2950 = NonNullable<FragmentResult2950>;

export type FragmentToken2950 =
  | FragmentSelf2950["__typename"]
  | FragmentSelf2950["typenameHint"] | FragmentToken2948 | FragmentToken2949;
