import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1341 } from "./fragment1341";
import type { FragmentToken1342 } from "./fragment1342";

export const FRAGMENT_1343 = gql(`
  fragment Fragment1343 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult1343 = ResultOf<typeof FRAGMENT_1343>;
type FragmentSelf1343 = NonNullable<FragmentResult1343>;

export type FragmentToken1343 =
  | FragmentSelf1343["__typename"]
  | FragmentSelf1343["typenameHint"] | FragmentToken1341 | FragmentToken1342;
