import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2634 } from "./fragment2634";
import type { FragmentToken2635 } from "./fragment2635";

export const FRAGMENT_2636 = gql(`
  fragment Fragment2636 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult2636 = ResultOf<typeof FRAGMENT_2636>;
type FragmentSelf2636 = NonNullable<FragmentResult2636>;

export type FragmentToken2636 =
  | FragmentSelf2636["__typename"]
  | FragmentSelf2636["typenameHint"] | FragmentToken2634 | FragmentToken2635;
