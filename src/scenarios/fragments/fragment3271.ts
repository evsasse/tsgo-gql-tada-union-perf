import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3269 } from "./fragment3269";
import type { FragmentToken3270 } from "./fragment3270";

export const FRAGMENT_3271 = gql(`
  fragment Fragment3271 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult3271 = ResultOf<typeof FRAGMENT_3271>;
type FragmentSelf3271 = NonNullable<FragmentResult3271>;

export type FragmentToken3271 =
  | FragmentSelf3271["__typename"]
  | FragmentSelf3271["typenameHint"] | FragmentToken3269 | FragmentToken3270;
