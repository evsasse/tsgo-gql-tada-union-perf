import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3687 } from "./fragment3687";
import type { FragmentToken3688 } from "./fragment3688";

export const FRAGMENT_3689 = gql(`
  fragment Fragment3689 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult3689 = ResultOf<typeof FRAGMENT_3689>;
type FragmentSelf3689 = NonNullable<FragmentResult3689>;

export type FragmentToken3689 =
  | FragmentSelf3689["__typename"]
  | FragmentSelf3689["typenameHint"] | FragmentToken3687 | FragmentToken3688;
