import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2035 } from "./fragment2035";
import type { FragmentToken2036 } from "./fragment2036";

export const FRAGMENT_2037 = gql(`
  fragment Fragment2037 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult2037 = ResultOf<typeof FRAGMENT_2037>;
type FragmentSelf2037 = NonNullable<FragmentResult2037>;

export type FragmentToken2037 =
  | FragmentSelf2037["__typename"]
  | FragmentSelf2037["typenameHint"] | FragmentToken2035 | FragmentToken2036;
