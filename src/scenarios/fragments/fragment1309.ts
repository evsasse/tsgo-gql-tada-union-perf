import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1307 } from "./fragment1307";
import type { FragmentToken1308 } from "./fragment1308";

export const FRAGMENT_1309 = gql(`
  fragment Fragment1309 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult1309 = ResultOf<typeof FRAGMENT_1309>;
type FragmentSelf1309 = NonNullable<FragmentResult1309>;

export type FragmentToken1309 =
  | FragmentSelf1309["__typename"]
  | FragmentSelf1309["typenameHint"] | FragmentToken1307 | FragmentToken1308;
