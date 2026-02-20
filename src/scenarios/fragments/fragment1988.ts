import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1986 } from "./fragment1986";
import type { FragmentToken1987 } from "./fragment1987";

export const FRAGMENT_1988 = gql(`
  fragment Fragment1988 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult1988 = ResultOf<typeof FRAGMENT_1988>;
type FragmentSelf1988 = NonNullable<FragmentResult1988>;

export type FragmentToken1988 =
  | FragmentSelf1988["__typename"]
  | FragmentSelf1988["typenameHint"] | FragmentToken1986 | FragmentToken1987;
