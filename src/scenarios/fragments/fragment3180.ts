import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3178 } from "./fragment3178";
import type { FragmentToken3179 } from "./fragment3179";

export const FRAGMENT_3180 = gql(`
  fragment Fragment3180 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult3180 = ResultOf<typeof FRAGMENT_3180>;
type FragmentSelf3180 = NonNullable<FragmentResult3180>;

export type FragmentToken3180 =
  | FragmentSelf3180["__typename"]
  | FragmentSelf3180["typenameHint"] | FragmentToken3178 | FragmentToken3179;
