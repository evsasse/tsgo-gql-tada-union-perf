import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3838 } from "./fragment3838";
import type { FragmentToken3839 } from "./fragment3839";

export const FRAGMENT_3840 = gql(`
  fragment Fragment3840 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult3840 = ResultOf<typeof FRAGMENT_3840>;
type FragmentSelf3840 = NonNullable<FragmentResult3840>;

export type FragmentToken3840 =
  | FragmentSelf3840["__typename"]
  | FragmentSelf3840["typenameHint"] | FragmentToken3838 | FragmentToken3839;
