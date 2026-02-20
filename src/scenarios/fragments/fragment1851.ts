import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1849 } from "./fragment1849";
import type { FragmentToken1850 } from "./fragment1850";

export const FRAGMENT_1851 = gql(`
  fragment Fragment1851 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult1851 = ResultOf<typeof FRAGMENT_1851>;
type FragmentSelf1851 = NonNullable<FragmentResult1851>;

export type FragmentToken1851 =
  | FragmentSelf1851["__typename"]
  | FragmentSelf1851["typenameHint"] | FragmentToken1849 | FragmentToken1850;
