import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1581 } from "./fragment1581";
import type { FragmentToken1582 } from "./fragment1582";

export const FRAGMENT_1583 = gql(`
  fragment Fragment1583 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult1583 = ResultOf<typeof FRAGMENT_1583>;
type FragmentSelf1583 = NonNullable<FragmentResult1583>;

export type FragmentToken1583 =
  | FragmentSelf1583["__typename"]
  | FragmentSelf1583["typenameHint"] | FragmentToken1581 | FragmentToken1582;
