import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2589 } from "./fragment2589";
import type { FragmentToken2590 } from "./fragment2590";

export const FRAGMENT_2591 = gql(`
  fragment Fragment2591 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult2591 = ResultOf<typeof FRAGMENT_2591>;
type FragmentSelf2591 = NonNullable<FragmentResult2591>;

export type FragmentToken2591 =
  | FragmentSelf2591["__typename"]
  | FragmentSelf2591["typenameHint"] | FragmentToken2589 | FragmentToken2590;
