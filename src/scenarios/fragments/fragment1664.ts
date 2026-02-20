import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1662 } from "./fragment1662";
import type { FragmentToken1663 } from "./fragment1663";

export const FRAGMENT_1664 = gql(`
  fragment Fragment1664 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult1664 = ResultOf<typeof FRAGMENT_1664>;
type FragmentSelf1664 = NonNullable<FragmentResult1664>;

export type FragmentToken1664 =
  | FragmentSelf1664["__typename"]
  | FragmentSelf1664["typenameHint"] | FragmentToken1662 | FragmentToken1663;
