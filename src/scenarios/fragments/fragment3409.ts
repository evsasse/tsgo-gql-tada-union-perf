import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3407 } from "./fragment3407";
import type { FragmentToken3408 } from "./fragment3408";

export const FRAGMENT_3409 = gql(`
  fragment Fragment3409 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult3409 = ResultOf<typeof FRAGMENT_3409>;
type FragmentSelf3409 = NonNullable<FragmentResult3409>;

export type FragmentToken3409 =
  | FragmentSelf3409["__typename"]
  | FragmentSelf3409["typenameHint"] | FragmentToken3407 | FragmentToken3408;
