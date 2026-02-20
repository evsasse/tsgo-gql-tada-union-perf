import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2601 } from "./fragment2601";
import type { FragmentToken2602 } from "./fragment2602";

export const FRAGMENT_2603 = gql(`
  fragment Fragment2603 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult2603 = ResultOf<typeof FRAGMENT_2603>;
type FragmentSelf2603 = NonNullable<FragmentResult2603>;

export type FragmentToken2603 =
  | FragmentSelf2603["__typename"]
  | FragmentSelf2603["typenameHint"] | FragmentToken2601 | FragmentToken2602;
