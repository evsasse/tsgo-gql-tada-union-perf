import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3274 } from "./fragment3274";
import type { FragmentToken3275 } from "./fragment3275";

export const FRAGMENT_3276 = gql(`
  fragment Fragment3276 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult3276 = ResultOf<typeof FRAGMENT_3276>;
type FragmentSelf3276 = NonNullable<FragmentResult3276>;

export type FragmentToken3276 =
  | FragmentSelf3276["__typename"]
  | FragmentSelf3276["typenameHint"] | FragmentToken3274 | FragmentToken3275;
