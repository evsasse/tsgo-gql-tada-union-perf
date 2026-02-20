import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2803 } from "./fragment2803";
import type { FragmentToken2804 } from "./fragment2804";

export const FRAGMENT_2805 = gql(`
  fragment Fragment2805 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult2805 = ResultOf<typeof FRAGMENT_2805>;
type FragmentSelf2805 = NonNullable<FragmentResult2805>;

export type FragmentToken2805 =
  | FragmentSelf2805["__typename"]
  | FragmentSelf2805["typenameHint"] | FragmentToken2803 | FragmentToken2804;
