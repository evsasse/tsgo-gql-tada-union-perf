import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2242 } from "./fragment2242";
import type { FragmentToken2243 } from "./fragment2243";

export const FRAGMENT_2244 = gql(`
  fragment Fragment2244 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult2244 = ResultOf<typeof FRAGMENT_2244>;
type FragmentSelf2244 = NonNullable<FragmentResult2244>;

export type FragmentToken2244 =
  | FragmentSelf2244["__typename"]
  | FragmentSelf2244["typenameHint"] | FragmentToken2242 | FragmentToken2243;
