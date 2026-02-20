import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1419 } from "./fragment1419";
import type { FragmentToken1420 } from "./fragment1420";

export const FRAGMENT_1421 = gql(`
  fragment Fragment1421 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult1421 = ResultOf<typeof FRAGMENT_1421>;
type FragmentSelf1421 = NonNullable<FragmentResult1421>;

export type FragmentToken1421 =
  | FragmentSelf1421["__typename"]
  | FragmentSelf1421["typenameHint"] | FragmentToken1419 | FragmentToken1420;
