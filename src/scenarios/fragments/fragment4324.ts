import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4322 } from "./fragment4322";
import type { FragmentToken4323 } from "./fragment4323";

export const FRAGMENT_4324 = gql(`
  fragment Fragment4324 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult4324 = ResultOf<typeof FRAGMENT_4324>;
type FragmentSelf4324 = NonNullable<FragmentResult4324>;

export type FragmentToken4324 =
  | FragmentSelf4324["__typename"]
  | FragmentSelf4324["typenameHint"] | FragmentToken4322 | FragmentToken4323;
