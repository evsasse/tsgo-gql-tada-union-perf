import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4140 } from "./fragment4140";
import type { FragmentToken4141 } from "./fragment4141";

export const FRAGMENT_4142 = gql(`
  fragment Fragment4142 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult4142 = ResultOf<typeof FRAGMENT_4142>;
type FragmentSelf4142 = NonNullable<FragmentResult4142>;

export type FragmentToken4142 =
  | FragmentSelf4142["__typename"]
  | FragmentSelf4142["typenameHint"] | FragmentToken4140 | FragmentToken4141;
