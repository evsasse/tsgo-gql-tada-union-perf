import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2529 } from "./fragment2529";
import type { FragmentToken2530 } from "./fragment2530";

export const FRAGMENT_2531 = gql(`
  fragment Fragment2531 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult2531 = ResultOf<typeof FRAGMENT_2531>;
type FragmentSelf2531 = NonNullable<FragmentResult2531>;

export type FragmentToken2531 =
  | FragmentSelf2531["__typename"]
  | FragmentSelf2531["typenameHint"] | FragmentToken2529 | FragmentToken2530;
