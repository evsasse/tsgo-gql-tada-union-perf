import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken673 } from "./fragment673";
import type { FragmentToken674 } from "./fragment674";

export const FRAGMENT_675 = gql(`
  fragment Fragment675 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult675 = ResultOf<typeof FRAGMENT_675>;
type FragmentSelf675 = NonNullable<FragmentResult675>;

export type FragmentToken675 =
  | FragmentSelf675["__typename"]
  | FragmentSelf675["typenameHint"] | FragmentToken673 | FragmentToken674;
