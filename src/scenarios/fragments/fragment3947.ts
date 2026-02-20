import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3945 } from "./fragment3945";
import type { FragmentToken3946 } from "./fragment3946";

export const FRAGMENT_3947 = gql(`
  fragment Fragment3947 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult3947 = ResultOf<typeof FRAGMENT_3947>;
type FragmentSelf3947 = NonNullable<FragmentResult3947>;

export type FragmentToken3947 =
  | FragmentSelf3947["__typename"]
  | FragmentSelf3947["typenameHint"] | FragmentToken3945 | FragmentToken3946;
