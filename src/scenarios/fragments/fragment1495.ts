import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1493 } from "./fragment1493";
import type { FragmentToken1494 } from "./fragment1494";

export const FRAGMENT_1495 = gql(`
  fragment Fragment1495 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult1495 = ResultOf<typeof FRAGMENT_1495>;
type FragmentSelf1495 = NonNullable<FragmentResult1495>;

export type FragmentToken1495 =
  | FragmentSelf1495["__typename"]
  | FragmentSelf1495["typenameHint"] | FragmentToken1493 | FragmentToken1494;
