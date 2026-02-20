import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2525 } from "./fragment2525";
import type { FragmentToken2526 } from "./fragment2526";

export const FRAGMENT_2527 = gql(`
  fragment Fragment2527 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult2527 = ResultOf<typeof FRAGMENT_2527>;
type FragmentSelf2527 = NonNullable<FragmentResult2527>;

export type FragmentToken2527 =
  | FragmentSelf2527["__typename"]
  | FragmentSelf2527["typenameHint"] | FragmentToken2525 | FragmentToken2526;
