import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1990 } from "./fragment1990";
import type { FragmentToken1991 } from "./fragment1991";

export const FRAGMENT_1992 = gql(`
  fragment Fragment1992 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult1992 = ResultOf<typeof FRAGMENT_1992>;
type FragmentSelf1992 = NonNullable<FragmentResult1992>;

export type FragmentToken1992 =
  | FragmentSelf1992["__typename"]
  | FragmentSelf1992["typenameHint"] | FragmentToken1990 | FragmentToken1991;
