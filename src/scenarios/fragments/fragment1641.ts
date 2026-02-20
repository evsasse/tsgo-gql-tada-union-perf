import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1639 } from "./fragment1639";
import type { FragmentToken1640 } from "./fragment1640";

export const FRAGMENT_1641 = gql(`
  fragment Fragment1641 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult1641 = ResultOf<typeof FRAGMENT_1641>;
type FragmentSelf1641 = NonNullable<FragmentResult1641>;

export type FragmentToken1641 =
  | FragmentSelf1641["__typename"]
  | FragmentSelf1641["typenameHint"] | FragmentToken1639 | FragmentToken1640;
