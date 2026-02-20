import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1816 } from "./fragment1816";
import type { FragmentToken1817 } from "./fragment1817";

export const FRAGMENT_1818 = gql(`
  fragment Fragment1818 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult1818 = ResultOf<typeof FRAGMENT_1818>;
type FragmentSelf1818 = NonNullable<FragmentResult1818>;

export type FragmentToken1818 =
  | FragmentSelf1818["__typename"]
  | FragmentSelf1818["typenameHint"] | FragmentToken1816 | FragmentToken1817;
