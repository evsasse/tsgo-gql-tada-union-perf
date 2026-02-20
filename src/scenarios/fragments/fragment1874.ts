import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1872 } from "./fragment1872";
import type { FragmentToken1873 } from "./fragment1873";

export const FRAGMENT_1874 = gql(`
  fragment Fragment1874 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult1874 = ResultOf<typeof FRAGMENT_1874>;
type FragmentSelf1874 = NonNullable<FragmentResult1874>;

export type FragmentToken1874 =
  | FragmentSelf1874["__typename"]
  | FragmentSelf1874["typenameHint"] | FragmentToken1872 | FragmentToken1873;
