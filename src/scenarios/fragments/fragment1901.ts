import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1899 } from "./fragment1899";
import type { FragmentToken1900 } from "./fragment1900";

export const FRAGMENT_1901 = gql(`
  fragment Fragment1901 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult1901 = ResultOf<typeof FRAGMENT_1901>;
type FragmentSelf1901 = NonNullable<FragmentResult1901>;

export type FragmentToken1901 =
  | FragmentSelf1901["__typename"]
  | FragmentSelf1901["typenameHint"] | FragmentToken1899 | FragmentToken1900;
