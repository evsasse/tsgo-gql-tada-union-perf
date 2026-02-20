import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3465 } from "./fragment3465";
import type { FragmentToken3466 } from "./fragment3466";

export const FRAGMENT_3467 = gql(`
  fragment Fragment3467 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult3467 = ResultOf<typeof FRAGMENT_3467>;
type FragmentSelf3467 = NonNullable<FragmentResult3467>;

export type FragmentToken3467 =
  | FragmentSelf3467["__typename"]
  | FragmentSelf3467["typenameHint"] | FragmentToken3465 | FragmentToken3466;
