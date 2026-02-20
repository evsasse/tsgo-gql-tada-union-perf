import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken574 } from "./fragment574";
import type { FragmentToken575 } from "./fragment575";

export const FRAGMENT_576 = gql(`
  fragment Fragment576 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult576 = ResultOf<typeof FRAGMENT_576>;
type FragmentSelf576 = NonNullable<FragmentResult576>;

export type FragmentToken576 =
  | FragmentSelf576["__typename"]
  | FragmentSelf576["typenameHint"] | FragmentToken574 | FragmentToken575;
