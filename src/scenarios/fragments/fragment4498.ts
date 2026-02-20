import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4496 } from "./fragment4496";
import type { FragmentToken4497 } from "./fragment4497";

export const FRAGMENT_4498 = gql(`
  fragment Fragment4498 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult4498 = ResultOf<typeof FRAGMENT_4498>;
type FragmentSelf4498 = NonNullable<FragmentResult4498>;

export type FragmentToken4498 =
  | FragmentSelf4498["__typename"]
  | FragmentSelf4498["typenameHint"] | FragmentToken4496 | FragmentToken4497;
