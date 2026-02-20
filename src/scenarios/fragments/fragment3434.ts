import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3432 } from "./fragment3432";
import type { FragmentToken3433 } from "./fragment3433";

export const FRAGMENT_3434 = gql(`
  fragment Fragment3434 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult3434 = ResultOf<typeof FRAGMENT_3434>;
type FragmentSelf3434 = NonNullable<FragmentResult3434>;

export type FragmentToken3434 =
  | FragmentSelf3434["__typename"]
  | FragmentSelf3434["typenameHint"] | FragmentToken3432 | FragmentToken3433;
