import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3930 } from "./fragment3930";
import type { FragmentToken3931 } from "./fragment3931";

export const FRAGMENT_3932 = gql(`
  fragment Fragment3932 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult3932 = ResultOf<typeof FRAGMENT_3932>;
type FragmentSelf3932 = NonNullable<FragmentResult3932>;

export type FragmentToken3932 =
  | FragmentSelf3932["__typename"]
  | FragmentSelf3932["typenameHint"] | FragmentToken3930 | FragmentToken3931;
