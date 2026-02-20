import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3247 } from "./fragment3247";
import type { FragmentToken3248 } from "./fragment3248";

export const FRAGMENT_3249 = gql(`
  fragment Fragment3249 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult3249 = ResultOf<typeof FRAGMENT_3249>;
type FragmentSelf3249 = NonNullable<FragmentResult3249>;

export type FragmentToken3249 =
  | FragmentSelf3249["__typename"]
  | FragmentSelf3249["typenameHint"] | FragmentToken3247 | FragmentToken3248;
