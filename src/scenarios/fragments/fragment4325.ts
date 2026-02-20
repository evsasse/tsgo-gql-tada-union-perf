import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4323 } from "./fragment4323";
import type { FragmentToken4324 } from "./fragment4324";

export const FRAGMENT_4325 = gql(`
  fragment Fragment4325 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult4325 = ResultOf<typeof FRAGMENT_4325>;
type FragmentSelf4325 = NonNullable<FragmentResult4325>;

export type FragmentToken4325 =
  | FragmentSelf4325["__typename"]
  | FragmentSelf4325["typenameHint"] | FragmentToken4323 | FragmentToken4324;
