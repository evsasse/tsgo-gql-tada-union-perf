import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3969 } from "./fragment3969";
import type { FragmentToken3970 } from "./fragment3970";

export const FRAGMENT_3971 = gql(`
  fragment Fragment3971 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult3971 = ResultOf<typeof FRAGMENT_3971>;
type FragmentSelf3971 = NonNullable<FragmentResult3971>;

export type FragmentToken3971 =
  | FragmentSelf3971["__typename"]
  | FragmentSelf3971["typenameHint"] | FragmentToken3969 | FragmentToken3970;
