import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3849 } from "./fragment3849";
import type { FragmentToken3850 } from "./fragment3850";

export const FRAGMENT_3851 = gql(`
  fragment Fragment3851 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult3851 = ResultOf<typeof FRAGMENT_3851>;
type FragmentSelf3851 = NonNullable<FragmentResult3851>;

export type FragmentToken3851 =
  | FragmentSelf3851["__typename"]
  | FragmentSelf3851["typenameHint"] | FragmentToken3849 | FragmentToken3850;
