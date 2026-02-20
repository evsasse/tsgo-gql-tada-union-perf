import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2080 } from "./fragment2080";
import type { FragmentToken2081 } from "./fragment2081";

export const FRAGMENT_2082 = gql(`
  fragment Fragment2082 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult2082 = ResultOf<typeof FRAGMENT_2082>;
type FragmentSelf2082 = NonNullable<FragmentResult2082>;

export type FragmentToken2082 =
  | FragmentSelf2082["__typename"]
  | FragmentSelf2082["typenameHint"] | FragmentToken2080 | FragmentToken2081;
