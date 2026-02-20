import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3799 } from "./fragment3799";
import type { FragmentToken3800 } from "./fragment3800";

export const FRAGMENT_3801 = gql(`
  fragment Fragment3801 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult3801 = ResultOf<typeof FRAGMENT_3801>;
type FragmentSelf3801 = NonNullable<FragmentResult3801>;

export type FragmentToken3801 =
  | FragmentSelf3801["__typename"]
  | FragmentSelf3801["typenameHint"] | FragmentToken3799 | FragmentToken3800;
