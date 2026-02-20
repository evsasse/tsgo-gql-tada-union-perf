import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3370 } from "./fragment3370";
import type { FragmentToken3371 } from "./fragment3371";

export const FRAGMENT_3372 = gql(`
  fragment Fragment3372 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult3372 = ResultOf<typeof FRAGMENT_3372>;
type FragmentSelf3372 = NonNullable<FragmentResult3372>;

export type FragmentToken3372 =
  | FragmentSelf3372["__typename"]
  | FragmentSelf3372["typenameHint"] | FragmentToken3370 | FragmentToken3371;
