import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1317 } from "./fragment1317";
import type { FragmentToken1318 } from "./fragment1318";

export const FRAGMENT_1319 = gql(`
  fragment Fragment1319 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult1319 = ResultOf<typeof FRAGMENT_1319>;
type FragmentSelf1319 = NonNullable<FragmentResult1319>;

export type FragmentToken1319 =
  | FragmentSelf1319["__typename"]
  | FragmentSelf1319["typenameHint"] | FragmentToken1317 | FragmentToken1318;
