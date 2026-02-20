import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3110 } from "./fragment3110";
import type { FragmentToken3111 } from "./fragment3111";

export const FRAGMENT_3112 = gql(`
  fragment Fragment3112 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult3112 = ResultOf<typeof FRAGMENT_3112>;
type FragmentSelf3112 = NonNullable<FragmentResult3112>;

export type FragmentToken3112 =
  | FragmentSelf3112["__typename"]
  | FragmentSelf3112["typenameHint"] | FragmentToken3110 | FragmentToken3111;
