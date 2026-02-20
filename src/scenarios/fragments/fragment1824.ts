import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1822 } from "./fragment1822";
import type { FragmentToken1823 } from "./fragment1823";

export const FRAGMENT_1824 = gql(`
  fragment Fragment1824 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult1824 = ResultOf<typeof FRAGMENT_1824>;
type FragmentSelf1824 = NonNullable<FragmentResult1824>;

export type FragmentToken1824 =
  | FragmentSelf1824["__typename"]
  | FragmentSelf1824["typenameHint"] | FragmentToken1822 | FragmentToken1823;
