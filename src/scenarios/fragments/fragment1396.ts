import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1394 } from "./fragment1394";
import type { FragmentToken1395 } from "./fragment1395";

export const FRAGMENT_1396 = gql(`
  fragment Fragment1396 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult1396 = ResultOf<typeof FRAGMENT_1396>;
type FragmentSelf1396 = NonNullable<FragmentResult1396>;

export type FragmentToken1396 =
  | FragmentSelf1396["__typename"]
  | FragmentSelf1396["typenameHint"] | FragmentToken1394 | FragmentToken1395;
