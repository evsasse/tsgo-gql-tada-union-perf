import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3302 } from "./fragment3302";
import type { FragmentToken3303 } from "./fragment3303";

export const FRAGMENT_3304 = gql(`
  fragment Fragment3304 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult3304 = ResultOf<typeof FRAGMENT_3304>;
type FragmentSelf3304 = NonNullable<FragmentResult3304>;

export type FragmentToken3304 =
  | FragmentSelf3304["__typename"]
  | FragmentSelf3304["typenameHint"] | FragmentToken3302 | FragmentToken3303;
