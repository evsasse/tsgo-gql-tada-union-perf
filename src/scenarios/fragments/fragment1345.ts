import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1343 } from "./fragment1343";
import type { FragmentToken1344 } from "./fragment1344";

export const FRAGMENT_1345 = gql(`
  fragment Fragment1345 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult1345 = ResultOf<typeof FRAGMENT_1345>;
type FragmentSelf1345 = NonNullable<FragmentResult1345>;

export type FragmentToken1345 =
  | FragmentSelf1345["__typename"]
  | FragmentSelf1345["typenameHint"] | FragmentToken1343 | FragmentToken1344;
