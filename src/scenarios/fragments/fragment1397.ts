import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1395 } from "./fragment1395";
import type { FragmentToken1396 } from "./fragment1396";

export const FRAGMENT_1397 = gql(`
  fragment Fragment1397 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult1397 = ResultOf<typeof FRAGMENT_1397>;
type FragmentSelf1397 = NonNullable<FragmentResult1397>;

export type FragmentToken1397 =
  | FragmentSelf1397["__typename"]
  | FragmentSelf1397["typenameHint"] | FragmentToken1395 | FragmentToken1396;
