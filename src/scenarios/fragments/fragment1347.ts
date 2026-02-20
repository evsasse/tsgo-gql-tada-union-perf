import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1345 } from "./fragment1345";
import type { FragmentToken1346 } from "./fragment1346";

export const FRAGMENT_1347 = gql(`
  fragment Fragment1347 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult1347 = ResultOf<typeof FRAGMENT_1347>;
type FragmentSelf1347 = NonNullable<FragmentResult1347>;

export type FragmentToken1347 =
  | FragmentSelf1347["__typename"]
  | FragmentSelf1347["typenameHint"] | FragmentToken1345 | FragmentToken1346;
