import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1378 } from "./fragment1378";
import type { FragmentToken1379 } from "./fragment1379";

export const FRAGMENT_1380 = gql(`
  fragment Fragment1380 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult1380 = ResultOf<typeof FRAGMENT_1380>;
type FragmentSelf1380 = NonNullable<FragmentResult1380>;

export type FragmentToken1380 =
  | FragmentSelf1380["__typename"]
  | FragmentSelf1380["typenameHint"] | FragmentToken1378 | FragmentToken1379;
