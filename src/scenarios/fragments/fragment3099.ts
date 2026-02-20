import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3097 } from "./fragment3097";
import type { FragmentToken3098 } from "./fragment3098";

export const FRAGMENT_3099 = gql(`
  fragment Fragment3099 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult3099 = ResultOf<typeof FRAGMENT_3099>;
type FragmentSelf3099 = NonNullable<FragmentResult3099>;

export type FragmentToken3099 =
  | FragmentSelf3099["__typename"]
  | FragmentSelf3099["typenameHint"] | FragmentToken3097 | FragmentToken3098;
