import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3607 } from "./fragment3607";
import type { FragmentToken3608 } from "./fragment3608";

export const FRAGMENT_3609 = gql(`
  fragment Fragment3609 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult3609 = ResultOf<typeof FRAGMENT_3609>;
type FragmentSelf3609 = NonNullable<FragmentResult3609>;

export type FragmentToken3609 =
  | FragmentSelf3609["__typename"]
  | FragmentSelf3609["typenameHint"] | FragmentToken3607 | FragmentToken3608;
