import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1884 } from "./fragment1884";
import type { FragmentToken1885 } from "./fragment1885";

export const FRAGMENT_1886 = gql(`
  fragment Fragment1886 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult1886 = ResultOf<typeof FRAGMENT_1886>;
type FragmentSelf1886 = NonNullable<FragmentResult1886>;

export type FragmentToken1886 =
  | FragmentSelf1886["__typename"]
  | FragmentSelf1886["typenameHint"] | FragmentToken1884 | FragmentToken1885;
