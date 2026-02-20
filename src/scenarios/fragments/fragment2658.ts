import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2656 } from "./fragment2656";
import type { FragmentToken2657 } from "./fragment2657";

export const FRAGMENT_2658 = gql(`
  fragment Fragment2658 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult2658 = ResultOf<typeof FRAGMENT_2658>;
type FragmentSelf2658 = NonNullable<FragmentResult2658>;

export type FragmentToken2658 =
  | FragmentSelf2658["__typename"]
  | FragmentSelf2658["typenameHint"] | FragmentToken2656 | FragmentToken2657;
