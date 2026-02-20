import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2377 } from "./fragment2377";
import type { FragmentToken2378 } from "./fragment2378";

export const FRAGMENT_2379 = gql(`
  fragment Fragment2379 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult2379 = ResultOf<typeof FRAGMENT_2379>;
type FragmentSelf2379 = NonNullable<FragmentResult2379>;

export type FragmentToken2379 =
  | FragmentSelf2379["__typename"]
  | FragmentSelf2379["typenameHint"] | FragmentToken2377 | FragmentToken2378;
