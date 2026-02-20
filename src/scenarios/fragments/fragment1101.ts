import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1099 } from "./fragment1099";
import type { FragmentToken1100 } from "./fragment1100";

export const FRAGMENT_1101 = gql(`
  fragment Fragment1101 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult1101 = ResultOf<typeof FRAGMENT_1101>;
type FragmentSelf1101 = NonNullable<FragmentResult1101>;

export type FragmentToken1101 =
  | FragmentSelf1101["__typename"]
  | FragmentSelf1101["typenameHint"] | FragmentToken1099 | FragmentToken1100;
