import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1659 } from "./fragment1659";
import type { FragmentToken1660 } from "./fragment1660";

export const FRAGMENT_1661 = gql(`
  fragment Fragment1661 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult1661 = ResultOf<typeof FRAGMENT_1661>;
type FragmentSelf1661 = NonNullable<FragmentResult1661>;

export type FragmentToken1661 =
  | FragmentSelf1661["__typename"]
  | FragmentSelf1661["typenameHint"] | FragmentToken1659 | FragmentToken1660;
