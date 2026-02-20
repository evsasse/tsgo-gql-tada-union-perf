import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1478 } from "./fragment1478";
import type { FragmentToken1479 } from "./fragment1479";

export const FRAGMENT_1480 = gql(`
  fragment Fragment1480 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult1480 = ResultOf<typeof FRAGMENT_1480>;
type FragmentSelf1480 = NonNullable<FragmentResult1480>;

export type FragmentToken1480 =
  | FragmentSelf1480["__typename"]
  | FragmentSelf1480["typenameHint"] | FragmentToken1478 | FragmentToken1479;
