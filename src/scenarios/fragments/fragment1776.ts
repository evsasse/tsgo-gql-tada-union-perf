import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1774 } from "./fragment1774";
import type { FragmentToken1775 } from "./fragment1775";

export const FRAGMENT_1776 = gql(`
  fragment Fragment1776 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult1776 = ResultOf<typeof FRAGMENT_1776>;
type FragmentSelf1776 = NonNullable<FragmentResult1776>;

export type FragmentToken1776 =
  | FragmentSelf1776["__typename"]
  | FragmentSelf1776["typenameHint"] | FragmentToken1774 | FragmentToken1775;
