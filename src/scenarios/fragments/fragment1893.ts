import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1891 } from "./fragment1891";
import type { FragmentToken1892 } from "./fragment1892";

export const FRAGMENT_1893 = gql(`
  fragment Fragment1893 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult1893 = ResultOf<typeof FRAGMENT_1893>;
type FragmentSelf1893 = NonNullable<FragmentResult1893>;

export type FragmentToken1893 =
  | FragmentSelf1893["__typename"]
  | FragmentSelf1893["typenameHint"] | FragmentToken1891 | FragmentToken1892;
