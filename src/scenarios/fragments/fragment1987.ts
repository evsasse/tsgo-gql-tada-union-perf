import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1985 } from "./fragment1985";
import type { FragmentToken1986 } from "./fragment1986";

export const FRAGMENT_1987 = gql(`
  fragment Fragment1987 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult1987 = ResultOf<typeof FRAGMENT_1987>;
type FragmentSelf1987 = NonNullable<FragmentResult1987>;

export type FragmentToken1987 =
  | FragmentSelf1987["__typename"]
  | FragmentSelf1987["typenameHint"] | FragmentToken1985 | FragmentToken1986;
