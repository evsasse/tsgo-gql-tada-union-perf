import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1208 } from "./fragment1208";
import type { FragmentToken1209 } from "./fragment1209";

export const FRAGMENT_1210 = gql(`
  fragment Fragment1210 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult1210 = ResultOf<typeof FRAGMENT_1210>;
type FragmentSelf1210 = NonNullable<FragmentResult1210>;

export type FragmentToken1210 =
  | FragmentSelf1210["__typename"]
  | FragmentSelf1210["typenameHint"] | FragmentToken1208 | FragmentToken1209;
