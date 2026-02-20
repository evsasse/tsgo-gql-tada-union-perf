import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2668 } from "./fragment2668";
import type { FragmentToken2669 } from "./fragment2669";

export const FRAGMENT_2670 = gql(`
  fragment Fragment2670 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult2670 = ResultOf<typeof FRAGMENT_2670>;
type FragmentSelf2670 = NonNullable<FragmentResult2670>;

export type FragmentToken2670 =
  | FragmentSelf2670["__typename"]
  | FragmentSelf2670["typenameHint"] | FragmentToken2668 | FragmentToken2669;
