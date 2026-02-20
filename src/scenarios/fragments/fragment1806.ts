import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1804 } from "./fragment1804";
import type { FragmentToken1805 } from "./fragment1805";

export const FRAGMENT_1806 = gql(`
  fragment Fragment1806 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult1806 = ResultOf<typeof FRAGMENT_1806>;
type FragmentSelf1806 = NonNullable<FragmentResult1806>;

export type FragmentToken1806 =
  | FragmentSelf1806["__typename"]
  | FragmentSelf1806["typenameHint"] | FragmentToken1804 | FragmentToken1805;
