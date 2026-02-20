import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1456 } from "./fragment1456";
import type { FragmentToken1457 } from "./fragment1457";

export const FRAGMENT_1458 = gql(`
  fragment Fragment1458 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult1458 = ResultOf<typeof FRAGMENT_1458>;
type FragmentSelf1458 = NonNullable<FragmentResult1458>;

export type FragmentToken1458 =
  | FragmentSelf1458["__typename"]
  | FragmentSelf1458["typenameHint"] | FragmentToken1456 | FragmentToken1457;
