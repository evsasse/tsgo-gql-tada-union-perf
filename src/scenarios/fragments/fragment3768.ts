import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3766 } from "./fragment3766";
import type { FragmentToken3767 } from "./fragment3767";

export const FRAGMENT_3768 = gql(`
  fragment Fragment3768 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult3768 = ResultOf<typeof FRAGMENT_3768>;
type FragmentSelf3768 = NonNullable<FragmentResult3768>;

export type FragmentToken3768 =
  | FragmentSelf3768["__typename"]
  | FragmentSelf3768["typenameHint"] | FragmentToken3766 | FragmentToken3767;
