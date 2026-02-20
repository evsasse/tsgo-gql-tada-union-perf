import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1865 } from "./fragment1865";
import type { FragmentToken1866 } from "./fragment1866";

export const FRAGMENT_1867 = gql(`
  fragment Fragment1867 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult1867 = ResultOf<typeof FRAGMENT_1867>;
type FragmentSelf1867 = NonNullable<FragmentResult1867>;

export type FragmentToken1867 =
  | FragmentSelf1867["__typename"]
  | FragmentSelf1867["typenameHint"] | FragmentToken1865 | FragmentToken1866;
