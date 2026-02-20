import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1904 } from "./fragment1904";
import type { FragmentToken1905 } from "./fragment1905";

export const FRAGMENT_1906 = gql(`
  fragment Fragment1906 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult1906 = ResultOf<typeof FRAGMENT_1906>;
type FragmentSelf1906 = NonNullable<FragmentResult1906>;

export type FragmentToken1906 =
  | FragmentSelf1906["__typename"]
  | FragmentSelf1906["typenameHint"] | FragmentToken1904 | FragmentToken1905;
