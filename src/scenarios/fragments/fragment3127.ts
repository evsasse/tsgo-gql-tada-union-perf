import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3125 } from "./fragment3125";
import type { FragmentToken3126 } from "./fragment3126";

export const FRAGMENT_3127 = gql(`
  fragment Fragment3127 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult3127 = ResultOf<typeof FRAGMENT_3127>;
type FragmentSelf3127 = NonNullable<FragmentResult3127>;

export type FragmentToken3127 =
  | FragmentSelf3127["__typename"]
  | FragmentSelf3127["typenameHint"] | FragmentToken3125 | FragmentToken3126;
