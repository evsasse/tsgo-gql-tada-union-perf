import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3218 } from "./fragment3218";
import type { FragmentToken3219 } from "./fragment3219";

export const FRAGMENT_3220 = gql(`
  fragment Fragment3220 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult3220 = ResultOf<typeof FRAGMENT_3220>;
type FragmentSelf3220 = NonNullable<FragmentResult3220>;

export type FragmentToken3220 =
  | FragmentSelf3220["__typename"]
  | FragmentSelf3220["typenameHint"] | FragmentToken3218 | FragmentToken3219;
