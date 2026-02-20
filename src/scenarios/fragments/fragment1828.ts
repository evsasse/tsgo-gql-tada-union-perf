import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1826 } from "./fragment1826";
import type { FragmentToken1827 } from "./fragment1827";

export const FRAGMENT_1828 = gql(`
  fragment Fragment1828 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult1828 = ResultOf<typeof FRAGMENT_1828>;
type FragmentSelf1828 = NonNullable<FragmentResult1828>;

export type FragmentToken1828 =
  | FragmentSelf1828["__typename"]
  | FragmentSelf1828["typenameHint"] | FragmentToken1826 | FragmentToken1827;
