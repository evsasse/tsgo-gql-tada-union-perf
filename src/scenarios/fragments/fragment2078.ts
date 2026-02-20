import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2076 } from "./fragment2076";
import type { FragmentToken2077 } from "./fragment2077";

export const FRAGMENT_2078 = gql(`
  fragment Fragment2078 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult2078 = ResultOf<typeof FRAGMENT_2078>;
type FragmentSelf2078 = NonNullable<FragmentResult2078>;

export type FragmentToken2078 =
  | FragmentSelf2078["__typename"]
  | FragmentSelf2078["typenameHint"] | FragmentToken2076 | FragmentToken2077;
