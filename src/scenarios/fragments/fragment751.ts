import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken749 } from "./fragment749";
import type { FragmentToken750 } from "./fragment750";

export const FRAGMENT_751 = gql(`
  fragment Fragment751 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult751 = ResultOf<typeof FRAGMENT_751>;
type FragmentSelf751 = NonNullable<FragmentResult751>;

export type FragmentToken751 =
  | FragmentSelf751["__typename"]
  | FragmentSelf751["typenameHint"] | FragmentToken749 | FragmentToken750;
