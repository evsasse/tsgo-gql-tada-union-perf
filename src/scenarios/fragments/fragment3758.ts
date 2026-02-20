import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3756 } from "./fragment3756";
import type { FragmentToken3757 } from "./fragment3757";

export const FRAGMENT_3758 = gql(`
  fragment Fragment3758 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult3758 = ResultOf<typeof FRAGMENT_3758>;
type FragmentSelf3758 = NonNullable<FragmentResult3758>;

export type FragmentToken3758 =
  | FragmentSelf3758["__typename"]
  | FragmentSelf3758["typenameHint"] | FragmentToken3756 | FragmentToken3757;
