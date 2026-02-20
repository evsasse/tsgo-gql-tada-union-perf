import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1522 } from "./fragment1522";
import type { FragmentToken1523 } from "./fragment1523";

export const FRAGMENT_1524 = gql(`
  fragment Fragment1524 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult1524 = ResultOf<typeof FRAGMENT_1524>;
type FragmentSelf1524 = NonNullable<FragmentResult1524>;

export type FragmentToken1524 =
  | FragmentSelf1524["__typename"]
  | FragmentSelf1524["typenameHint"] | FragmentToken1522 | FragmentToken1523;
