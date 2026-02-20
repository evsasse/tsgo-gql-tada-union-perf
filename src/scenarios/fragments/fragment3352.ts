import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3350 } from "./fragment3350";
import type { FragmentToken3351 } from "./fragment3351";

export const FRAGMENT_3352 = gql(`
  fragment Fragment3352 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult3352 = ResultOf<typeof FRAGMENT_3352>;
type FragmentSelf3352 = NonNullable<FragmentResult3352>;

export type FragmentToken3352 =
  | FragmentSelf3352["__typename"]
  | FragmentSelf3352["typenameHint"] | FragmentToken3350 | FragmentToken3351;
