import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1439 } from "./fragment1439";
import type { FragmentToken1440 } from "./fragment1440";

export const FRAGMENT_1441 = gql(`
  fragment Fragment1441 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult1441 = ResultOf<typeof FRAGMENT_1441>;
type FragmentSelf1441 = NonNullable<FragmentResult1441>;

export type FragmentToken1441 =
  | FragmentSelf1441["__typename"]
  | FragmentSelf1441["typenameHint"] | FragmentToken1439 | FragmentToken1440;
