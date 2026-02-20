import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4141 } from "./fragment4141";
import type { FragmentToken4142 } from "./fragment4142";

export const FRAGMENT_4143 = gql(`
  fragment Fragment4143 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult4143 = ResultOf<typeof FRAGMENT_4143>;
type FragmentSelf4143 = NonNullable<FragmentResult4143>;

export type FragmentToken4143 =
  | FragmentSelf4143["__typename"]
  | FragmentSelf4143["typenameHint"] | FragmentToken4141 | FragmentToken4142;
