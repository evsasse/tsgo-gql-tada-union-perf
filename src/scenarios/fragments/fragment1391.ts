import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1389 } from "./fragment1389";
import type { FragmentToken1390 } from "./fragment1390";

export const FRAGMENT_1391 = gql(`
  fragment Fragment1391 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult1391 = ResultOf<typeof FRAGMENT_1391>;
type FragmentSelf1391 = NonNullable<FragmentResult1391>;

export type FragmentToken1391 =
  | FragmentSelf1391["__typename"]
  | FragmentSelf1391["typenameHint"] | FragmentToken1389 | FragmentToken1390;
