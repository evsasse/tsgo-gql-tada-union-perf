import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2945 } from "./fragment2945";
import type { FragmentToken2946 } from "./fragment2946";

export const FRAGMENT_2947 = gql(`
  fragment Fragment2947 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult2947 = ResultOf<typeof FRAGMENT_2947>;
type FragmentSelf2947 = NonNullable<FragmentResult2947>;

export type FragmentToken2947 =
  | FragmentSelf2947["__typename"]
  | FragmentSelf2947["typenameHint"] | FragmentToken2945 | FragmentToken2946;
