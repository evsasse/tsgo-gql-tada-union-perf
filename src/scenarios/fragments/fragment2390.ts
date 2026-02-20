import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2388 } from "./fragment2388";
import type { FragmentToken2389 } from "./fragment2389";

export const FRAGMENT_2390 = gql(`
  fragment Fragment2390 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult2390 = ResultOf<typeof FRAGMENT_2390>;
type FragmentSelf2390 = NonNullable<FragmentResult2390>;

export type FragmentToken2390 =
  | FragmentSelf2390["__typename"]
  | FragmentSelf2390["typenameHint"] | FragmentToken2388 | FragmentToken2389;
