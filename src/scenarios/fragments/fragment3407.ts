import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3405 } from "./fragment3405";
import type { FragmentToken3406 } from "./fragment3406";

export const FRAGMENT_3407 = gql(`
  fragment Fragment3407 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult3407 = ResultOf<typeof FRAGMENT_3407>;
type FragmentSelf3407 = NonNullable<FragmentResult3407>;

export type FragmentToken3407 =
  | FragmentSelf3407["__typename"]
  | FragmentSelf3407["typenameHint"] | FragmentToken3405 | FragmentToken3406;
