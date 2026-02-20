import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3150 } from "./fragment3150";
import type { FragmentToken3151 } from "./fragment3151";

export const FRAGMENT_3152 = gql(`
  fragment Fragment3152 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult3152 = ResultOf<typeof FRAGMENT_3152>;
type FragmentSelf3152 = NonNullable<FragmentResult3152>;

export type FragmentToken3152 =
  | FragmentSelf3152["__typename"]
  | FragmentSelf3152["typenameHint"] | FragmentToken3150 | FragmentToken3151;
