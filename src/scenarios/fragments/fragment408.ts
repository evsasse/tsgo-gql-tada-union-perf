import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken406 } from "./fragment406";
import type { FragmentToken407 } from "./fragment407";

export const FRAGMENT_408 = gql(`
  fragment Fragment408 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult408 = ResultOf<typeof FRAGMENT_408>;
type FragmentSelf408 = NonNullable<FragmentResult408>;

export type FragmentToken408 =
  | FragmentSelf408["__typename"]
  | FragmentSelf408["typenameHint"] | FragmentToken406 | FragmentToken407;
