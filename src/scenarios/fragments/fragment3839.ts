import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3837 } from "./fragment3837";
import type { FragmentToken3838 } from "./fragment3838";

export const FRAGMENT_3839 = gql(`
  fragment Fragment3839 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult3839 = ResultOf<typeof FRAGMENT_3839>;
type FragmentSelf3839 = NonNullable<FragmentResult3839>;

export type FragmentToken3839 =
  | FragmentSelf3839["__typename"]
  | FragmentSelf3839["typenameHint"] | FragmentToken3837 | FragmentToken3838;
