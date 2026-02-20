import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3184 } from "./fragment3184";
import type { FragmentToken3185 } from "./fragment3185";

export const FRAGMENT_3186 = gql(`
  fragment Fragment3186 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult3186 = ResultOf<typeof FRAGMENT_3186>;
type FragmentSelf3186 = NonNullable<FragmentResult3186>;

export type FragmentToken3186 =
  | FragmentSelf3186["__typename"]
  | FragmentSelf3186["typenameHint"] | FragmentToken3184 | FragmentToken3185;
