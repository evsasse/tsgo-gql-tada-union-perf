import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1824 } from "./fragment1824";
import type { FragmentToken1825 } from "./fragment1825";

export const FRAGMENT_1826 = gql(`
  fragment Fragment1826 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult1826 = ResultOf<typeof FRAGMENT_1826>;
type FragmentSelf1826 = NonNullable<FragmentResult1826>;

export type FragmentToken1826 =
  | FragmentSelf1826["__typename"]
  | FragmentSelf1826["typenameHint"] | FragmentToken1824 | FragmentToken1825;
