import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3334 } from "./fragment3334";
import type { FragmentToken3335 } from "./fragment3335";

export const FRAGMENT_3336 = gql(`
  fragment Fragment3336 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult3336 = ResultOf<typeof FRAGMENT_3336>;
type FragmentSelf3336 = NonNullable<FragmentResult3336>;

export type FragmentToken3336 =
  | FragmentSelf3336["__typename"]
  | FragmentSelf3336["typenameHint"] | FragmentToken3334 | FragmentToken3335;
