import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3433 } from "./fragment3433";
import type { FragmentToken3434 } from "./fragment3434";

export const FRAGMENT_3435 = gql(`
  fragment Fragment3435 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult3435 = ResultOf<typeof FRAGMENT_3435>;
type FragmentSelf3435 = NonNullable<FragmentResult3435>;

export type FragmentToken3435 =
  | FragmentSelf3435["__typename"]
  | FragmentSelf3435["typenameHint"] | FragmentToken3433 | FragmentToken3434;
