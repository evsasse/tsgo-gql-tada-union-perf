import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2264 } from "./fragment2264";
import type { FragmentToken2265 } from "./fragment2265";

export const FRAGMENT_2266 = gql(`
  fragment Fragment2266 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult2266 = ResultOf<typeof FRAGMENT_2266>;
type FragmentSelf2266 = NonNullable<FragmentResult2266>;

export type FragmentToken2266 =
  | FragmentSelf2266["__typename"]
  | FragmentSelf2266["typenameHint"] | FragmentToken2264 | FragmentToken2265;
