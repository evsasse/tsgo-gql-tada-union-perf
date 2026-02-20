import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1878 } from "./fragment1878";
import type { FragmentToken1879 } from "./fragment1879";

export const FRAGMENT_1880 = gql(`
  fragment Fragment1880 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult1880 = ResultOf<typeof FRAGMENT_1880>;
type FragmentSelf1880 = NonNullable<FragmentResult1880>;

export type FragmentToken1880 =
  | FragmentSelf1880["__typename"]
  | FragmentSelf1880["typenameHint"] | FragmentToken1878 | FragmentToken1879;
