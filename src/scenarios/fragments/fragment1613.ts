import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1611 } from "./fragment1611";
import type { FragmentToken1612 } from "./fragment1612";

export const FRAGMENT_1613 = gql(`
  fragment Fragment1613 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult1613 = ResultOf<typeof FRAGMENT_1613>;
type FragmentSelf1613 = NonNullable<FragmentResult1613>;

export type FragmentToken1613 =
  | FragmentSelf1613["__typename"]
  | FragmentSelf1613["typenameHint"] | FragmentToken1611 | FragmentToken1612;
