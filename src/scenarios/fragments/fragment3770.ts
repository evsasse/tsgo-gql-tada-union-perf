import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3768 } from "./fragment3768";
import type { FragmentToken3769 } from "./fragment3769";

export const FRAGMENT_3770 = gql(`
  fragment Fragment3770 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult3770 = ResultOf<typeof FRAGMENT_3770>;
type FragmentSelf3770 = NonNullable<FragmentResult3770>;

export type FragmentToken3770 =
  | FragmentSelf3770["__typename"]
  | FragmentSelf3770["typenameHint"] | FragmentToken3768 | FragmentToken3769;
