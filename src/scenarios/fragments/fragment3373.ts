import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3371 } from "./fragment3371";
import type { FragmentToken3372 } from "./fragment3372";

export const FRAGMENT_3373 = gql(`
  fragment Fragment3373 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult3373 = ResultOf<typeof FRAGMENT_3373>;
type FragmentSelf3373 = NonNullable<FragmentResult3373>;

export type FragmentToken3373 =
  | FragmentSelf3373["__typename"]
  | FragmentSelf3373["typenameHint"] | FragmentToken3371 | FragmentToken3372;
