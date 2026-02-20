import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4351 } from "./fragment4351";
import type { FragmentToken4352 } from "./fragment4352";

export const FRAGMENT_4353 = gql(`
  fragment Fragment4353 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult4353 = ResultOf<typeof FRAGMENT_4353>;
type FragmentSelf4353 = NonNullable<FragmentResult4353>;

export type FragmentToken4353 =
  | FragmentSelf4353["__typename"]
  | FragmentSelf4353["typenameHint"] | FragmentToken4351 | FragmentToken4352;
