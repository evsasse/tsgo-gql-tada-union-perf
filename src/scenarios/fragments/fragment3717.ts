import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3715 } from "./fragment3715";
import type { FragmentToken3716 } from "./fragment3716";

export const FRAGMENT_3717 = gql(`
  fragment Fragment3717 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult3717 = ResultOf<typeof FRAGMENT_3717>;
type FragmentSelf3717 = NonNullable<FragmentResult3717>;

export type FragmentToken3717 =
  | FragmentSelf3717["__typename"]
  | FragmentSelf3717["typenameHint"] | FragmentToken3715 | FragmentToken3716;
