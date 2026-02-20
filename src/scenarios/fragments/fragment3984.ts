import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3982 } from "./fragment3982";
import type { FragmentToken3983 } from "./fragment3983";

export const FRAGMENT_3984 = gql(`
  fragment Fragment3984 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult3984 = ResultOf<typeof FRAGMENT_3984>;
type FragmentSelf3984 = NonNullable<FragmentResult3984>;

export type FragmentToken3984 =
  | FragmentSelf3984["__typename"]
  | FragmentSelf3984["typenameHint"] | FragmentToken3982 | FragmentToken3983;
