import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3377 } from "./fragment3377";
import type { FragmentToken3378 } from "./fragment3378";

export const FRAGMENT_3379 = gql(`
  fragment Fragment3379 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult3379 = ResultOf<typeof FRAGMENT_3379>;
type FragmentSelf3379 = NonNullable<FragmentResult3379>;

export type FragmentToken3379 =
  | FragmentSelf3379["__typename"]
  | FragmentSelf3379["typenameHint"] | FragmentToken3377 | FragmentToken3378;
