import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2625 } from "./fragment2625";
import type { FragmentToken2626 } from "./fragment2626";

export const FRAGMENT_2627 = gql(`
  fragment Fragment2627 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult2627 = ResultOf<typeof FRAGMENT_2627>;
type FragmentSelf2627 = NonNullable<FragmentResult2627>;

export type FragmentToken2627 =
  | FragmentSelf2627["__typename"]
  | FragmentSelf2627["typenameHint"] | FragmentToken2625 | FragmentToken2626;
