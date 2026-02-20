import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3041 } from "./fragment3041";
import type { FragmentToken3042 } from "./fragment3042";

export const FRAGMENT_3043 = gql(`
  fragment Fragment3043 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult3043 = ResultOf<typeof FRAGMENT_3043>;
type FragmentSelf3043 = NonNullable<FragmentResult3043>;

export type FragmentToken3043 =
  | FragmentSelf3043["__typename"]
  | FragmentSelf3043["typenameHint"] | FragmentToken3041 | FragmentToken3042;
