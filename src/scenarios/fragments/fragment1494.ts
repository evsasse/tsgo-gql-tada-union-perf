import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1492 } from "./fragment1492";
import type { FragmentToken1493 } from "./fragment1493";

export const FRAGMENT_1494 = gql(`
  fragment Fragment1494 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult1494 = ResultOf<typeof FRAGMENT_1494>;
type FragmentSelf1494 = NonNullable<FragmentResult1494>;

export type FragmentToken1494 =
  | FragmentSelf1494["__typename"]
  | FragmentSelf1494["typenameHint"] | FragmentToken1492 | FragmentToken1493;
