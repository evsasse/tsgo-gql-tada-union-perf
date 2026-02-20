import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1340 } from "./fragment1340";
import type { FragmentToken1341 } from "./fragment1341";

export const FRAGMENT_1342 = gql(`
  fragment Fragment1342 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult1342 = ResultOf<typeof FRAGMENT_1342>;
type FragmentSelf1342 = NonNullable<FragmentResult1342>;

export type FragmentToken1342 =
  | FragmentSelf1342["__typename"]
  | FragmentSelf1342["typenameHint"] | FragmentToken1340 | FragmentToken1341;
