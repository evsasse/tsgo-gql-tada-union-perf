import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2077 } from "./fragment2077";
import type { FragmentToken2078 } from "./fragment2078";

export const FRAGMENT_2079 = gql(`
  fragment Fragment2079 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult2079 = ResultOf<typeof FRAGMENT_2079>;
type FragmentSelf2079 = NonNullable<FragmentResult2079>;

export type FragmentToken2079 =
  | FragmentSelf2079["__typename"]
  | FragmentSelf2079["typenameHint"] | FragmentToken2077 | FragmentToken2078;
