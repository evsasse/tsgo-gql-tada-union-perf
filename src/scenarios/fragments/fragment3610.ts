import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3608 } from "./fragment3608";
import type { FragmentToken3609 } from "./fragment3609";

export const FRAGMENT_3610 = gql(`
  fragment Fragment3610 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult3610 = ResultOf<typeof FRAGMENT_3610>;
type FragmentSelf3610 = NonNullable<FragmentResult3610>;

export type FragmentToken3610 =
  | FragmentSelf3610["__typename"]
  | FragmentSelf3610["typenameHint"] | FragmentToken3608 | FragmentToken3609;
