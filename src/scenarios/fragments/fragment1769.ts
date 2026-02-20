import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1767 } from "./fragment1767";
import type { FragmentToken1768 } from "./fragment1768";

export const FRAGMENT_1769 = gql(`
  fragment Fragment1769 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult1769 = ResultOf<typeof FRAGMENT_1769>;
type FragmentSelf1769 = NonNullable<FragmentResult1769>;

export type FragmentToken1769 =
  | FragmentSelf1769["__typename"]
  | FragmentSelf1769["typenameHint"] | FragmentToken1767 | FragmentToken1768;
