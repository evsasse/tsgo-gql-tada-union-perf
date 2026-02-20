import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3296 } from "./fragment3296";
import type { FragmentToken3297 } from "./fragment3297";

export const FRAGMENT_3298 = gql(`
  fragment Fragment3298 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult3298 = ResultOf<typeof FRAGMENT_3298>;
type FragmentSelf3298 = NonNullable<FragmentResult3298>;

export type FragmentToken3298 =
  | FragmentSelf3298["__typename"]
  | FragmentSelf3298["typenameHint"] | FragmentToken3296 | FragmentToken3297;
