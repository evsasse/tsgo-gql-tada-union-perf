import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3376 } from "./fragment3376";
import type { FragmentToken3377 } from "./fragment3377";

export const FRAGMENT_3378 = gql(`
  fragment Fragment3378 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult3378 = ResultOf<typeof FRAGMENT_3378>;
type FragmentSelf3378 = NonNullable<FragmentResult3378>;

export type FragmentToken3378 =
  | FragmentSelf3378["__typename"]
  | FragmentSelf3378["typenameHint"] | FragmentToken3376 | FragmentToken3377;
