import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3152 } from "./fragment3152";
import type { FragmentToken3153 } from "./fragment3153";

export const FRAGMENT_3154 = gql(`
  fragment Fragment3154 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult3154 = ResultOf<typeof FRAGMENT_3154>;
type FragmentSelf3154 = NonNullable<FragmentResult3154>;

export type FragmentToken3154 =
  | FragmentSelf3154["__typename"]
  | FragmentSelf3154["typenameHint"] | FragmentToken3152 | FragmentToken3153;
