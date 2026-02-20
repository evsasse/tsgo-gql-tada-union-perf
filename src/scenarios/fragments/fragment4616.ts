import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4614 } from "./fragment4614";
import type { FragmentToken4615 } from "./fragment4615";

export const FRAGMENT_4616 = gql(`
  fragment Fragment4616 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult4616 = ResultOf<typeof FRAGMENT_4616>;
type FragmentSelf4616 = NonNullable<FragmentResult4616>;

export type FragmentToken4616 =
  | FragmentSelf4616["__typename"]
  | FragmentSelf4616["typenameHint"] | FragmentToken4614 | FragmentToken4615;
