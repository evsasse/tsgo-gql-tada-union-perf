import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken605 } from "./fragment605";
import type { FragmentToken606 } from "./fragment606";

export const FRAGMENT_607 = gql(`
  fragment Fragment607 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult607 = ResultOf<typeof FRAGMENT_607>;
type FragmentSelf607 = NonNullable<FragmentResult607>;

export type FragmentToken607 =
  | FragmentSelf607["__typename"]
  | FragmentSelf607["typenameHint"] | FragmentToken605 | FragmentToken606;
