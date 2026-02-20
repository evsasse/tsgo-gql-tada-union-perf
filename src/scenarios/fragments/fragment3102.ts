import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3100 } from "./fragment3100";
import type { FragmentToken3101 } from "./fragment3101";

export const FRAGMENT_3102 = gql(`
  fragment Fragment3102 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult3102 = ResultOf<typeof FRAGMENT_3102>;
type FragmentSelf3102 = NonNullable<FragmentResult3102>;

export type FragmentToken3102 =
  | FragmentSelf3102["__typename"]
  | FragmentSelf3102["typenameHint"] | FragmentToken3100 | FragmentToken3101;
