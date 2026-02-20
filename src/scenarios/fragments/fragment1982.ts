import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1980 } from "./fragment1980";
import type { FragmentToken1981 } from "./fragment1981";

export const FRAGMENT_1982 = gql(`
  fragment Fragment1982 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult1982 = ResultOf<typeof FRAGMENT_1982>;
type FragmentSelf1982 = NonNullable<FragmentResult1982>;

export type FragmentToken1982 =
  | FragmentSelf1982["__typename"]
  | FragmentSelf1982["typenameHint"] | FragmentToken1980 | FragmentToken1981;
