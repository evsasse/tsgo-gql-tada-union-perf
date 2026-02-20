import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3060 } from "./fragment3060";
import type { FragmentToken3061 } from "./fragment3061";

export const FRAGMENT_3062 = gql(`
  fragment Fragment3062 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult3062 = ResultOf<typeof FRAGMENT_3062>;
type FragmentSelf3062 = NonNullable<FragmentResult3062>;

export type FragmentToken3062 =
  | FragmentSelf3062["__typename"]
  | FragmentSelf3062["typenameHint"] | FragmentToken3060 | FragmentToken3061;
