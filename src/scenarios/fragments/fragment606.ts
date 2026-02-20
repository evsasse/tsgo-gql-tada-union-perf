import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken604 } from "./fragment604";
import type { FragmentToken605 } from "./fragment605";

export const FRAGMENT_606 = gql(`
  fragment Fragment606 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult606 = ResultOf<typeof FRAGMENT_606>;
type FragmentSelf606 = NonNullable<FragmentResult606>;

export type FragmentToken606 =
  | FragmentSelf606["__typename"]
  | FragmentSelf606["typenameHint"] | FragmentToken604 | FragmentToken605;
