import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3740 } from "./fragment3740";
import type { FragmentToken3741 } from "./fragment3741";

export const FRAGMENT_3742 = gql(`
  fragment Fragment3742 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult3742 = ResultOf<typeof FRAGMENT_3742>;
type FragmentSelf3742 = NonNullable<FragmentResult3742>;

export type FragmentToken3742 =
  | FragmentSelf3742["__typename"]
  | FragmentSelf3742["typenameHint"] | FragmentToken3740 | FragmentToken3741;
