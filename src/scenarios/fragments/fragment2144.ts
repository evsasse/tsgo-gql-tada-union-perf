import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2142 } from "./fragment2142";
import type { FragmentToken2143 } from "./fragment2143";

export const FRAGMENT_2144 = gql(`
  fragment Fragment2144 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult2144 = ResultOf<typeof FRAGMENT_2144>;
type FragmentSelf2144 = NonNullable<FragmentResult2144>;

export type FragmentToken2144 =
  | FragmentSelf2144["__typename"]
  | FragmentSelf2144["typenameHint"] | FragmentToken2142 | FragmentToken2143;
