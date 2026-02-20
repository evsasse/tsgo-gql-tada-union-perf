import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1987 } from "./fragment1987";
import type { FragmentToken1988 } from "./fragment1988";

export const FRAGMENT_1989 = gql(`
  fragment Fragment1989 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult1989 = ResultOf<typeof FRAGMENT_1989>;
type FragmentSelf1989 = NonNullable<FragmentResult1989>;

export type FragmentToken1989 =
  | FragmentSelf1989["__typename"]
  | FragmentSelf1989["typenameHint"] | FragmentToken1987 | FragmentToken1988;
