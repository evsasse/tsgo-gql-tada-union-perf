import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3048 } from "./fragment3048";
import type { FragmentToken3049 } from "./fragment3049";

export const FRAGMENT_3050 = gql(`
  fragment Fragment3050 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult3050 = ResultOf<typeof FRAGMENT_3050>;
type FragmentSelf3050 = NonNullable<FragmentResult3050>;

export type FragmentToken3050 =
  | FragmentSelf3050["__typename"]
  | FragmentSelf3050["typenameHint"] | FragmentToken3048 | FragmentToken3049;
