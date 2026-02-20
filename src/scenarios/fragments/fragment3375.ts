import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3373 } from "./fragment3373";
import type { FragmentToken3374 } from "./fragment3374";

export const FRAGMENT_3375 = gql(`
  fragment Fragment3375 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult3375 = ResultOf<typeof FRAGMENT_3375>;
type FragmentSelf3375 = NonNullable<FragmentResult3375>;

export type FragmentToken3375 =
  | FragmentSelf3375["__typename"]
  | FragmentSelf3375["typenameHint"] | FragmentToken3373 | FragmentToken3374;
