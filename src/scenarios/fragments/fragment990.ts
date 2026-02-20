import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken988 } from "./fragment988";
import type { FragmentToken989 } from "./fragment989";

export const FRAGMENT_990 = gql(`
  fragment Fragment990 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult990 = ResultOf<typeof FRAGMENT_990>;
type FragmentSelf990 = NonNullable<FragmentResult990>;

export type FragmentToken990 =
  | FragmentSelf990["__typename"]
  | FragmentSelf990["typenameHint"] | FragmentToken988 | FragmentToken989;
