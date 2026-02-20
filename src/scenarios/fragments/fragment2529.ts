import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2527 } from "./fragment2527";
import type { FragmentToken2528 } from "./fragment2528";

export const FRAGMENT_2529 = gql(`
  fragment Fragment2529 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult2529 = ResultOf<typeof FRAGMENT_2529>;
type FragmentSelf2529 = NonNullable<FragmentResult2529>;

export type FragmentToken2529 =
  | FragmentSelf2529["__typename"]
  | FragmentSelf2529["typenameHint"] | FragmentToken2527 | FragmentToken2528;
