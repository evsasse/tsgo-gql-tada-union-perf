import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1543 } from "./fragment1543";
import type { FragmentToken1544 } from "./fragment1544";

export const FRAGMENT_1545 = gql(`
  fragment Fragment1545 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult1545 = ResultOf<typeof FRAGMENT_1545>;
type FragmentSelf1545 = NonNullable<FragmentResult1545>;

export type FragmentToken1545 =
  | FragmentSelf1545["__typename"]
  | FragmentSelf1545["typenameHint"] | FragmentToken1543 | FragmentToken1544;
