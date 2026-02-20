import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4621 } from "./fragment4621";
import type { FragmentToken4622 } from "./fragment4622";

export const FRAGMENT_4623 = gql(`
  fragment Fragment4623 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult4623 = ResultOf<typeof FRAGMENT_4623>;
type FragmentSelf4623 = NonNullable<FragmentResult4623>;

export type FragmentToken4623 =
  | FragmentSelf4623["__typename"]
  | FragmentSelf4623["typenameHint"] | FragmentToken4621 | FragmentToken4622;
