import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1775 } from "./fragment1775";
import type { FragmentToken1776 } from "./fragment1776";

export const FRAGMENT_1777 = gql(`
  fragment Fragment1777 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult1777 = ResultOf<typeof FRAGMENT_1777>;
type FragmentSelf1777 = NonNullable<FragmentResult1777>;

export type FragmentToken1777 =
  | FragmentSelf1777["__typename"]
  | FragmentSelf1777["typenameHint"] | FragmentToken1775 | FragmentToken1776;
