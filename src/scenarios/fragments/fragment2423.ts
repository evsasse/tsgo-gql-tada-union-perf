import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2421 } from "./fragment2421";
import type { FragmentToken2422 } from "./fragment2422";

export const FRAGMENT_2423 = gql(`
  fragment Fragment2423 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult2423 = ResultOf<typeof FRAGMENT_2423>;
type FragmentSelf2423 = NonNullable<FragmentResult2423>;

export type FragmentToken2423 =
  | FragmentSelf2423["__typename"]
  | FragmentSelf2423["typenameHint"] | FragmentToken2421 | FragmentToken2422;
