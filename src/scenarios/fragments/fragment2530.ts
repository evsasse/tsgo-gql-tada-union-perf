import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2528 } from "./fragment2528";
import type { FragmentToken2529 } from "./fragment2529";

export const FRAGMENT_2530 = gql(`
  fragment Fragment2530 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult2530 = ResultOf<typeof FRAGMENT_2530>;
type FragmentSelf2530 = NonNullable<FragmentResult2530>;

export type FragmentToken2530 =
  | FragmentSelf2530["__typename"]
  | FragmentSelf2530["typenameHint"] | FragmentToken2528 | FragmentToken2529;
