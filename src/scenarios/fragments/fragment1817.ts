import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1815 } from "./fragment1815";
import type { FragmentToken1816 } from "./fragment1816";

export const FRAGMENT_1817 = gql(`
  fragment Fragment1817 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult1817 = ResultOf<typeof FRAGMENT_1817>;
type FragmentSelf1817 = NonNullable<FragmentResult1817>;

export type FragmentToken1817 =
  | FragmentSelf1817["__typename"]
  | FragmentSelf1817["typenameHint"] | FragmentToken1815 | FragmentToken1816;
