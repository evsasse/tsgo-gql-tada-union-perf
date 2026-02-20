import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3188 } from "./fragment3188";
import type { FragmentToken3189 } from "./fragment3189";

export const FRAGMENT_3190 = gql(`
  fragment Fragment3190 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult3190 = ResultOf<typeof FRAGMENT_3190>;
type FragmentSelf3190 = NonNullable<FragmentResult3190>;

export type FragmentToken3190 =
  | FragmentSelf3190["__typename"]
  | FragmentSelf3190["typenameHint"] | FragmentToken3188 | FragmentToken3189;
