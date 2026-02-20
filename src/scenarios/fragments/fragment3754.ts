import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3752 } from "./fragment3752";
import type { FragmentToken3753 } from "./fragment3753";

export const FRAGMENT_3754 = gql(`
  fragment Fragment3754 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult3754 = ResultOf<typeof FRAGMENT_3754>;
type FragmentSelf3754 = NonNullable<FragmentResult3754>;

export type FragmentToken3754 =
  | FragmentSelf3754["__typename"]
  | FragmentSelf3754["typenameHint"] | FragmentToken3752 | FragmentToken3753;
