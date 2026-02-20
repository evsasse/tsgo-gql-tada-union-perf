import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4725 } from "./fragment4725";
import type { FragmentToken4726 } from "./fragment4726";

export const FRAGMENT_4727 = gql(`
  fragment Fragment4727 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult4727 = ResultOf<typeof FRAGMENT_4727>;
type FragmentSelf4727 = NonNullable<FragmentResult4727>;

export type FragmentToken4727 =
  | FragmentSelf4727["__typename"]
  | FragmentSelf4727["typenameHint"] | FragmentToken4725 | FragmentToken4726;
