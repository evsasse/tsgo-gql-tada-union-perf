import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1945 } from "./fragment1945";
import type { FragmentToken1946 } from "./fragment1946";

export const FRAGMENT_1947 = gql(`
  fragment Fragment1947 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult1947 = ResultOf<typeof FRAGMENT_1947>;
type FragmentSelf1947 = NonNullable<FragmentResult1947>;

export type FragmentToken1947 =
  | FragmentSelf1947["__typename"]
  | FragmentSelf1947["typenameHint"] | FragmentToken1945 | FragmentToken1946;
