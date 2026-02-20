import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2655 } from "./fragment2655";
import type { FragmentToken2656 } from "./fragment2656";

export const FRAGMENT_2657 = gql(`
  fragment Fragment2657 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult2657 = ResultOf<typeof FRAGMENT_2657>;
type FragmentSelf2657 = NonNullable<FragmentResult2657>;

export type FragmentToken2657 =
  | FragmentSelf2657["__typename"]
  | FragmentSelf2657["typenameHint"] | FragmentToken2655 | FragmentToken2656;
