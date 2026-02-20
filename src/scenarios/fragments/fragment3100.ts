import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3098 } from "./fragment3098";
import type { FragmentToken3099 } from "./fragment3099";

export const FRAGMENT_3100 = gql(`
  fragment Fragment3100 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult3100 = ResultOf<typeof FRAGMENT_3100>;
type FragmentSelf3100 = NonNullable<FragmentResult3100>;

export type FragmentToken3100 =
  | FragmentSelf3100["__typename"]
  | FragmentSelf3100["typenameHint"] | FragmentToken3098 | FragmentToken3099;
