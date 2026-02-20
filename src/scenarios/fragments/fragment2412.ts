import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2410 } from "./fragment2410";
import type { FragmentToken2411 } from "./fragment2411";

export const FRAGMENT_2412 = gql(`
  fragment Fragment2412 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult2412 = ResultOf<typeof FRAGMENT_2412>;
type FragmentSelf2412 = NonNullable<FragmentResult2412>;

export type FragmentToken2412 =
  | FragmentSelf2412["__typename"]
  | FragmentSelf2412["typenameHint"] | FragmentToken2410 | FragmentToken2411;
