import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4139 } from "./fragment4139";
import type { FragmentToken4140 } from "./fragment4140";

export const FRAGMENT_4141 = gql(`
  fragment Fragment4141 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult4141 = ResultOf<typeof FRAGMENT_4141>;
type FragmentSelf4141 = NonNullable<FragmentResult4141>;

export type FragmentToken4141 =
  | FragmentSelf4141["__typename"]
  | FragmentSelf4141["typenameHint"] | FragmentToken4139 | FragmentToken4140;
