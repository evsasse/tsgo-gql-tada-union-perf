import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3311 } from "./fragment3311";
import type { FragmentToken3312 } from "./fragment3312";

export const FRAGMENT_3313 = gql(`
  fragment Fragment3313 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult3313 = ResultOf<typeof FRAGMENT_3313>;
type FragmentSelf3313 = NonNullable<FragmentResult3313>;

export type FragmentToken3313 =
  | FragmentSelf3313["__typename"]
  | FragmentSelf3313["typenameHint"] | FragmentToken3311 | FragmentToken3312;
