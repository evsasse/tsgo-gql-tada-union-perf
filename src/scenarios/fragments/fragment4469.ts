import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4467 } from "./fragment4467";
import type { FragmentToken4468 } from "./fragment4468";

export const FRAGMENT_4469 = gql(`
  fragment Fragment4469 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult4469 = ResultOf<typeof FRAGMENT_4469>;
type FragmentSelf4469 = NonNullable<FragmentResult4469>;

export type FragmentToken4469 =
  | FragmentSelf4469["__typename"]
  | FragmentSelf4469["typenameHint"] | FragmentToken4467 | FragmentToken4468;
