import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1723 } from "./fragment1723";
import type { FragmentToken1724 } from "./fragment1724";

export const FRAGMENT_1725 = gql(`
  fragment Fragment1725 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult1725 = ResultOf<typeof FRAGMENT_1725>;
type FragmentSelf1725 = NonNullable<FragmentResult1725>;

export type FragmentToken1725 =
  | FragmentSelf1725["__typename"]
  | FragmentSelf1725["typenameHint"] | FragmentToken1723 | FragmentToken1724;
