import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1825 } from "./fragment1825";
import type { FragmentToken1826 } from "./fragment1826";

export const FRAGMENT_1827 = gql(`
  fragment Fragment1827 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult1827 = ResultOf<typeof FRAGMENT_1827>;
type FragmentSelf1827 = NonNullable<FragmentResult1827>;

export type FragmentToken1827 =
  | FragmentSelf1827["__typename"]
  | FragmentSelf1827["typenameHint"] | FragmentToken1825 | FragmentToken1826;
