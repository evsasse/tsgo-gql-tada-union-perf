import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3297 } from "./fragment3297";
import type { FragmentToken3298 } from "./fragment3298";

export const FRAGMENT_3299 = gql(`
  fragment Fragment3299 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult3299 = ResultOf<typeof FRAGMENT_3299>;
type FragmentSelf3299 = NonNullable<FragmentResult3299>;

export type FragmentToken3299 =
  | FragmentSelf3299["__typename"]
  | FragmentSelf3299["typenameHint"] | FragmentToken3297 | FragmentToken3298;
