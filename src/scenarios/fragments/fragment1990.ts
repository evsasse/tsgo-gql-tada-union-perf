import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1988 } from "./fragment1988";
import type { FragmentToken1989 } from "./fragment1989";

export const FRAGMENT_1990 = gql(`
  fragment Fragment1990 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult1990 = ResultOf<typeof FRAGMENT_1990>;
type FragmentSelf1990 = NonNullable<FragmentResult1990>;

export type FragmentToken1990 =
  | FragmentSelf1990["__typename"]
  | FragmentSelf1990["typenameHint"] | FragmentToken1988 | FragmentToken1989;
