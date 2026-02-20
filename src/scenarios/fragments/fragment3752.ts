import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3750 } from "./fragment3750";
import type { FragmentToken3751 } from "./fragment3751";

export const FRAGMENT_3752 = gql(`
  fragment Fragment3752 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult3752 = ResultOf<typeof FRAGMENT_3752>;
type FragmentSelf3752 = NonNullable<FragmentResult3752>;

export type FragmentToken3752 =
  | FragmentSelf3752["__typename"]
  | FragmentSelf3752["typenameHint"] | FragmentToken3750 | FragmentToken3751;
