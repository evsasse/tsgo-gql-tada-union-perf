import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2849 } from "./fragment2849";
import type { FragmentToken2850 } from "./fragment2850";

export const FRAGMENT_2851 = gql(`
  fragment Fragment2851 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult2851 = ResultOf<typeof FRAGMENT_2851>;
type FragmentSelf2851 = NonNullable<FragmentResult2851>;

export type FragmentToken2851 =
  | FragmentSelf2851["__typename"]
  | FragmentSelf2851["typenameHint"] | FragmentToken2849 | FragmentToken2850;
