import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1352 } from "./fragment1352";
import type { FragmentToken1353 } from "./fragment1353";

export const FRAGMENT_1354 = gql(`
  fragment Fragment1354 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult1354 = ResultOf<typeof FRAGMENT_1354>;
type FragmentSelf1354 = NonNullable<FragmentResult1354>;

export type FragmentToken1354 =
  | FragmentSelf1354["__typename"]
  | FragmentSelf1354["typenameHint"] | FragmentToken1352 | FragmentToken1353;
