import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4162 } from "./fragment4162";
import type { FragmentToken4163 } from "./fragment4163";

export const FRAGMENT_4164 = gql(`
  fragment Fragment4164 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult4164 = ResultOf<typeof FRAGMENT_4164>;
type FragmentSelf4164 = NonNullable<FragmentResult4164>;

export type FragmentToken4164 =
  | FragmentSelf4164["__typename"]
  | FragmentSelf4164["typenameHint"] | FragmentToken4162 | FragmentToken4163;
