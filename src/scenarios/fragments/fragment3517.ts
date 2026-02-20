import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3515 } from "./fragment3515";
import type { FragmentToken3516 } from "./fragment3516";

export const FRAGMENT_3517 = gql(`
  fragment Fragment3517 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult3517 = ResultOf<typeof FRAGMENT_3517>;
type FragmentSelf3517 = NonNullable<FragmentResult3517>;

export type FragmentToken3517 =
  | FragmentSelf3517["__typename"]
  | FragmentSelf3517["typenameHint"] | FragmentToken3515 | FragmentToken3516;
