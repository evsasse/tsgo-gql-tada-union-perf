import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3610 } from "./fragment3610";
import type { FragmentToken3611 } from "./fragment3611";

export const FRAGMENT_3612 = gql(`
  fragment Fragment3612 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult3612 = ResultOf<typeof FRAGMENT_3612>;
type FragmentSelf3612 = NonNullable<FragmentResult3612>;

export type FragmentToken3612 =
  | FragmentSelf3612["__typename"]
  | FragmentSelf3612["typenameHint"] | FragmentToken3610 | FragmentToken3611;
