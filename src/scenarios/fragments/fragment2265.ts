import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2263 } from "./fragment2263";
import type { FragmentToken2264 } from "./fragment2264";

export const FRAGMENT_2265 = gql(`
  fragment Fragment2265 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult2265 = ResultOf<typeof FRAGMENT_2265>;
type FragmentSelf2265 = NonNullable<FragmentResult2265>;

export type FragmentToken2265 =
  | FragmentSelf2265["__typename"]
  | FragmentSelf2265["typenameHint"] | FragmentToken2263 | FragmentToken2264;
