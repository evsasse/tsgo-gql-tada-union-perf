import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3343 } from "./fragment3343";
import type { FragmentToken3344 } from "./fragment3344";

export const FRAGMENT_3345 = gql(`
  fragment Fragment3345 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult3345 = ResultOf<typeof FRAGMENT_3345>;
type FragmentSelf3345 = NonNullable<FragmentResult3345>;

export type FragmentToken3345 =
  | FragmentSelf3345["__typename"]
  | FragmentSelf3345["typenameHint"] | FragmentToken3343 | FragmentToken3344;
