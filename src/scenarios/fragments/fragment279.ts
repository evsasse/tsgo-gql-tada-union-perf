import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken277 } from "./fragment277";
import type { FragmentToken278 } from "./fragment278";

export const FRAGMENT_279 = gql(`
  fragment Fragment279 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult279 = ResultOf<typeof FRAGMENT_279>;
type FragmentSelf279 = NonNullable<FragmentResult279>;

export type FragmentToken279 =
  | FragmentSelf279["__typename"]
  | FragmentSelf279["typenameHint"] | FragmentToken277 | FragmentToken278;
