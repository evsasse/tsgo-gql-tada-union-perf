import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2675 } from "./fragment2675";
import type { FragmentToken2676 } from "./fragment2676";

export const FRAGMENT_2677 = gql(`
  fragment Fragment2677 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult2677 = ResultOf<typeof FRAGMENT_2677>;
type FragmentSelf2677 = NonNullable<FragmentResult2677>;

export type FragmentToken2677 =
  | FragmentSelf2677["__typename"]
  | FragmentSelf2677["typenameHint"] | FragmentToken2675 | FragmentToken2676;
