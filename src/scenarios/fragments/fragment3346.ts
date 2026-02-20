import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3344 } from "./fragment3344";
import type { FragmentToken3345 } from "./fragment3345";

export const FRAGMENT_3346 = gql(`
  fragment Fragment3346 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult3346 = ResultOf<typeof FRAGMENT_3346>;
type FragmentSelf3346 = NonNullable<FragmentResult3346>;

export type FragmentToken3346 =
  | FragmentSelf3346["__typename"]
  | FragmentSelf3346["typenameHint"] | FragmentToken3344 | FragmentToken3345;
