import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3124 } from "./fragment3124";
import type { FragmentToken3125 } from "./fragment3125";

export const FRAGMENT_3126 = gql(`
  fragment Fragment3126 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult3126 = ResultOf<typeof FRAGMENT_3126>;
type FragmentSelf3126 = NonNullable<FragmentResult3126>;

export type FragmentToken3126 =
  | FragmentSelf3126["__typename"]
  | FragmentSelf3126["typenameHint"] | FragmentToken3124 | FragmentToken3125;
