import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4666 } from "./fragment4666";
import type { FragmentToken4667 } from "./fragment4667";

export const FRAGMENT_4668 = gql(`
  fragment Fragment4668 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult4668 = ResultOf<typeof FRAGMENT_4668>;
type FragmentSelf4668 = NonNullable<FragmentResult4668>;

export type FragmentToken4668 =
  | FragmentSelf4668["__typename"]
  | FragmentSelf4668["typenameHint"] | FragmentToken4666 | FragmentToken4667;
