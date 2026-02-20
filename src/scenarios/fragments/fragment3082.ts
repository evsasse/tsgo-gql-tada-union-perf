import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3080 } from "./fragment3080";
import type { FragmentToken3081 } from "./fragment3081";

export const FRAGMENT_3082 = gql(`
  fragment Fragment3082 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult3082 = ResultOf<typeof FRAGMENT_3082>;
type FragmentSelf3082 = NonNullable<FragmentResult3082>;

export type FragmentToken3082 =
  | FragmentSelf3082["__typename"]
  | FragmentSelf3082["typenameHint"] | FragmentToken3080 | FragmentToken3081;
