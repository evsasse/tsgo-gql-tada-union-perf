import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1890 } from "./fragment1890";
import type { FragmentToken1891 } from "./fragment1891";

export const FRAGMENT_1892 = gql(`
  fragment Fragment1892 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult1892 = ResultOf<typeof FRAGMENT_1892>;
type FragmentSelf1892 = NonNullable<FragmentResult1892>;

export type FragmentToken1892 =
  | FragmentSelf1892["__typename"]
  | FragmentSelf1892["typenameHint"] | FragmentToken1890 | FragmentToken1891;
