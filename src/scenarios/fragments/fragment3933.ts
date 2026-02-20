import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3931 } from "./fragment3931";
import type { FragmentToken3932 } from "./fragment3932";

export const FRAGMENT_3933 = gql(`
  fragment Fragment3933 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult3933 = ResultOf<typeof FRAGMENT_3933>;
type FragmentSelf3933 = NonNullable<FragmentResult3933>;

export type FragmentToken3933 =
  | FragmentSelf3933["__typename"]
  | FragmentSelf3933["typenameHint"] | FragmentToken3931 | FragmentToken3932;
