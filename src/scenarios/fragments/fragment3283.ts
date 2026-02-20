import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3281 } from "./fragment3281";
import type { FragmentToken3282 } from "./fragment3282";

export const FRAGMENT_3283 = gql(`
  fragment Fragment3283 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult3283 = ResultOf<typeof FRAGMENT_3283>;
type FragmentSelf3283 = NonNullable<FragmentResult3283>;

export type FragmentToken3283 =
  | FragmentSelf3283["__typename"]
  | FragmentSelf3283["typenameHint"] | FragmentToken3281 | FragmentToken3282;
