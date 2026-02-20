import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3362 } from "./fragment3362";
import type { FragmentToken3363 } from "./fragment3363";

export const FRAGMENT_3364 = gql(`
  fragment Fragment3364 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult3364 = ResultOf<typeof FRAGMENT_3364>;
type FragmentSelf3364 = NonNullable<FragmentResult3364>;

export type FragmentToken3364 =
  | FragmentSelf3364["__typename"]
  | FragmentSelf3364["typenameHint"] | FragmentToken3362 | FragmentToken3363;
