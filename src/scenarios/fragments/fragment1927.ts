import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1925 } from "./fragment1925";
import type { FragmentToken1926 } from "./fragment1926";

export const FRAGMENT_1927 = gql(`
  fragment Fragment1927 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult1927 = ResultOf<typeof FRAGMENT_1927>;
type FragmentSelf1927 = NonNullable<FragmentResult1927>;

export type FragmentToken1927 =
  | FragmentSelf1927["__typename"]
  | FragmentSelf1927["typenameHint"] | FragmentToken1925 | FragmentToken1926;
