import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2100 } from "./fragment2100";
import type { FragmentToken2101 } from "./fragment2101";

export const FRAGMENT_2102 = gql(`
  fragment Fragment2102 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult2102 = ResultOf<typeof FRAGMENT_2102>;
type FragmentSelf2102 = NonNullable<FragmentResult2102>;

export type FragmentToken2102 =
  | FragmentSelf2102["__typename"]
  | FragmentSelf2102["typenameHint"] | FragmentToken2100 | FragmentToken2101;
