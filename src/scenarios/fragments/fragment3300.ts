import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3298 } from "./fragment3298";
import type { FragmentToken3299 } from "./fragment3299";

export const FRAGMENT_3300 = gql(`
  fragment Fragment3300 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult3300 = ResultOf<typeof FRAGMENT_3300>;
type FragmentSelf3300 = NonNullable<FragmentResult3300>;

export type FragmentToken3300 =
  | FragmentSelf3300["__typename"]
  | FragmentSelf3300["typenameHint"] | FragmentToken3298 | FragmentToken3299;
