import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2789 } from "./fragment2789";
import type { FragmentToken2790 } from "./fragment2790";

export const FRAGMENT_2791 = gql(`
  fragment Fragment2791 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult2791 = ResultOf<typeof FRAGMENT_2791>;
type FragmentSelf2791 = NonNullable<FragmentResult2791>;

export type FragmentToken2791 =
  | FragmentSelf2791["__typename"]
  | FragmentSelf2791["typenameHint"] | FragmentToken2789 | FragmentToken2790;
