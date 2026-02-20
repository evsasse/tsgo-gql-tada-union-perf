import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3875 } from "./fragment3875";
import type { FragmentToken3876 } from "./fragment3876";

export const FRAGMENT_3877 = gql(`
  fragment Fragment3877 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult3877 = ResultOf<typeof FRAGMENT_3877>;
type FragmentSelf3877 = NonNullable<FragmentResult3877>;

export type FragmentToken3877 =
  | FragmentSelf3877["__typename"]
  | FragmentSelf3877["typenameHint"] | FragmentToken3875 | FragmentToken3876;
