import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken800 } from "./fragment800";
import type { FragmentToken801 } from "./fragment801";

export const FRAGMENT_802 = gql(`
  fragment Fragment802 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult802 = ResultOf<typeof FRAGMENT_802>;
type FragmentSelf802 = NonNullable<FragmentResult802>;

export type FragmentToken802 =
  | FragmentSelf802["__typename"]
  | FragmentSelf802["typenameHint"] | FragmentToken800 | FragmentToken801;
