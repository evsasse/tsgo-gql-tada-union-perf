import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3782 } from "./fragment3782";
import type { FragmentToken3783 } from "./fragment3783";

export const FRAGMENT_3784 = gql(`
  fragment Fragment3784 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult3784 = ResultOf<typeof FRAGMENT_3784>;
type FragmentSelf3784 = NonNullable<FragmentResult3784>;

export type FragmentToken3784 =
  | FragmentSelf3784["__typename"]
  | FragmentSelf3784["typenameHint"] | FragmentToken3782 | FragmentToken3783;
