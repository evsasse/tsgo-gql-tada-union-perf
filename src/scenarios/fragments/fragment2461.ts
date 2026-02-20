import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2459 } from "./fragment2459";
import type { FragmentToken2460 } from "./fragment2460";

export const FRAGMENT_2461 = gql(`
  fragment Fragment2461 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult2461 = ResultOf<typeof FRAGMENT_2461>;
type FragmentSelf2461 = NonNullable<FragmentResult2461>;

export type FragmentToken2461 =
  | FragmentSelf2461["__typename"]
  | FragmentSelf2461["typenameHint"] | FragmentToken2459 | FragmentToken2460;
