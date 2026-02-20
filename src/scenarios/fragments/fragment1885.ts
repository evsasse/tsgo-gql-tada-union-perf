import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1883 } from "./fragment1883";
import type { FragmentToken1884 } from "./fragment1884";

export const FRAGMENT_1885 = gql(`
  fragment Fragment1885 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult1885 = ResultOf<typeof FRAGMENT_1885>;
type FragmentSelf1885 = NonNullable<FragmentResult1885>;

export type FragmentToken1885 =
  | FragmentSelf1885["__typename"]
  | FragmentSelf1885["typenameHint"] | FragmentToken1883 | FragmentToken1884;
