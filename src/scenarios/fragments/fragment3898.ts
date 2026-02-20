import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3896 } from "./fragment3896";
import type { FragmentToken3897 } from "./fragment3897";

export const FRAGMENT_3898 = gql(`
  fragment Fragment3898 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult3898 = ResultOf<typeof FRAGMENT_3898>;
type FragmentSelf3898 = NonNullable<FragmentResult3898>;

export type FragmentToken3898 =
  | FragmentSelf3898["__typename"]
  | FragmentSelf3898["typenameHint"] | FragmentToken3896 | FragmentToken3897;
