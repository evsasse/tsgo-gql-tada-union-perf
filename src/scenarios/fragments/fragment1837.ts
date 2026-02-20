import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1835 } from "./fragment1835";
import type { FragmentToken1836 } from "./fragment1836";

export const FRAGMENT_1837 = gql(`
  fragment Fragment1837 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult1837 = ResultOf<typeof FRAGMENT_1837>;
type FragmentSelf1837 = NonNullable<FragmentResult1837>;

export type FragmentToken1837 =
  | FragmentSelf1837["__typename"]
  | FragmentSelf1837["typenameHint"] | FragmentToken1835 | FragmentToken1836;
