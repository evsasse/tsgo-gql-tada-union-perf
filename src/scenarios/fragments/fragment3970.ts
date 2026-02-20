import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3968 } from "./fragment3968";
import type { FragmentToken3969 } from "./fragment3969";

export const FRAGMENT_3970 = gql(`
  fragment Fragment3970 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult3970 = ResultOf<typeof FRAGMENT_3970>;
type FragmentSelf3970 = NonNullable<FragmentResult3970>;

export type FragmentToken3970 =
  | FragmentSelf3970["__typename"]
  | FragmentSelf3970["typenameHint"] | FragmentToken3968 | FragmentToken3969;
