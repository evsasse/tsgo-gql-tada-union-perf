import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1868 } from "./fragment1868";
import type { FragmentToken1869 } from "./fragment1869";

export const FRAGMENT_1870 = gql(`
  fragment Fragment1870 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult1870 = ResultOf<typeof FRAGMENT_1870>;
type FragmentSelf1870 = NonNullable<FragmentResult1870>;

export type FragmentToken1870 =
  | FragmentSelf1870["__typename"]
  | FragmentSelf1870["typenameHint"] | FragmentToken1868 | FragmentToken1869;
