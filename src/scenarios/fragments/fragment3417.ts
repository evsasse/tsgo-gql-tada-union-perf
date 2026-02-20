import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3415 } from "./fragment3415";
import type { FragmentToken3416 } from "./fragment3416";

export const FRAGMENT_3417 = gql(`
  fragment Fragment3417 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult3417 = ResultOf<typeof FRAGMENT_3417>;
type FragmentSelf3417 = NonNullable<FragmentResult3417>;

export type FragmentToken3417 =
  | FragmentSelf3417["__typename"]
  | FragmentSelf3417["typenameHint"] | FragmentToken3415 | FragmentToken3416;
