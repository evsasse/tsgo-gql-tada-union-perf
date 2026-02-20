import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1768 } from "./fragment1768";
import type { FragmentToken1769 } from "./fragment1769";

export const FRAGMENT_1770 = gql(`
  fragment Fragment1770 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult1770 = ResultOf<typeof FRAGMENT_1770>;
type FragmentSelf1770 = NonNullable<FragmentResult1770>;

export type FragmentToken1770 =
  | FragmentSelf1770["__typename"]
  | FragmentSelf1770["typenameHint"] | FragmentToken1768 | FragmentToken1769;
