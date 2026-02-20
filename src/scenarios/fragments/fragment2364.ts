import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2362 } from "./fragment2362";
import type { FragmentToken2363 } from "./fragment2363";

export const FRAGMENT_2364 = gql(`
  fragment Fragment2364 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult2364 = ResultOf<typeof FRAGMENT_2364>;
type FragmentSelf2364 = NonNullable<FragmentResult2364>;

export type FragmentToken2364 =
  | FragmentSelf2364["__typename"]
  | FragmentSelf2364["typenameHint"] | FragmentToken2362 | FragmentToken2363;
