import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3807 } from "./fragment3807";
import type { FragmentToken3808 } from "./fragment3808";

export const FRAGMENT_3809 = gql(`
  fragment Fragment3809 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult3809 = ResultOf<typeof FRAGMENT_3809>;
type FragmentSelf3809 = NonNullable<FragmentResult3809>;

export type FragmentToken3809 =
  | FragmentSelf3809["__typename"]
  | FragmentSelf3809["typenameHint"] | FragmentToken3807 | FragmentToken3808;
