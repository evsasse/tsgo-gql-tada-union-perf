import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4715 } from "./fragment4715";
import type { FragmentToken4716 } from "./fragment4716";

export const FRAGMENT_4717 = gql(`
  fragment Fragment4717 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult4717 = ResultOf<typeof FRAGMENT_4717>;
type FragmentSelf4717 = NonNullable<FragmentResult4717>;

export type FragmentToken4717 =
  | FragmentSelf4717["__typename"]
  | FragmentSelf4717["typenameHint"] | FragmentToken4715 | FragmentToken4716;
