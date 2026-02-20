import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2029 } from "./fragment2029";
import type { FragmentToken2030 } from "./fragment2030";

export const FRAGMENT_2031 = gql(`
  fragment Fragment2031 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult2031 = ResultOf<typeof FRAGMENT_2031>;
type FragmentSelf2031 = NonNullable<FragmentResult2031>;

export type FragmentToken2031 =
  | FragmentSelf2031["__typename"]
  | FragmentSelf2031["typenameHint"] | FragmentToken2029 | FragmentToken2030;
