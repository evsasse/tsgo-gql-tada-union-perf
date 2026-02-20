import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3816 } from "./fragment3816";
import type { FragmentToken3817 } from "./fragment3817";

export const FRAGMENT_3818 = gql(`
  fragment Fragment3818 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult3818 = ResultOf<typeof FRAGMENT_3818>;
type FragmentSelf3818 = NonNullable<FragmentResult3818>;

export type FragmentToken3818 =
  | FragmentSelf3818["__typename"]
  | FragmentSelf3818["typenameHint"] | FragmentToken3816 | FragmentToken3817;
