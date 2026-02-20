import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1776 } from "./fragment1776";
import type { FragmentToken1777 } from "./fragment1777";

export const FRAGMENT_1778 = gql(`
  fragment Fragment1778 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult1778 = ResultOf<typeof FRAGMENT_1778>;
type FragmentSelf1778 = NonNullable<FragmentResult1778>;

export type FragmentToken1778 =
  | FragmentSelf1778["__typename"]
  | FragmentSelf1778["typenameHint"] | FragmentToken1776 | FragmentToken1777;
