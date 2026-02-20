import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2395 } from "./fragment2395";
import type { FragmentToken2396 } from "./fragment2396";

export const FRAGMENT_2397 = gql(`
  fragment Fragment2397 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult2397 = ResultOf<typeof FRAGMENT_2397>;
type FragmentSelf2397 = NonNullable<FragmentResult2397>;

export type FragmentToken2397 =
  | FragmentSelf2397["__typename"]
  | FragmentSelf2397["typenameHint"] | FragmentToken2395 | FragmentToken2396;
