import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2652 } from "./fragment2652";
import type { FragmentToken2653 } from "./fragment2653";

export const FRAGMENT_2654 = gql(`
  fragment Fragment2654 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult2654 = ResultOf<typeof FRAGMENT_2654>;
type FragmentSelf2654 = NonNullable<FragmentResult2654>;

export type FragmentToken2654 =
  | FragmentSelf2654["__typename"]
  | FragmentSelf2654["typenameHint"] | FragmentToken2652 | FragmentToken2653;
