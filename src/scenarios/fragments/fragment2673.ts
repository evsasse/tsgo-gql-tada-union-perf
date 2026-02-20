import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2671 } from "./fragment2671";
import type { FragmentToken2672 } from "./fragment2672";

export const FRAGMENT_2673 = gql(`
  fragment Fragment2673 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult2673 = ResultOf<typeof FRAGMENT_2673>;
type FragmentSelf2673 = NonNullable<FragmentResult2673>;

export type FragmentToken2673 =
  | FragmentSelf2673["__typename"]
  | FragmentSelf2673["typenameHint"] | FragmentToken2671 | FragmentToken2672;
