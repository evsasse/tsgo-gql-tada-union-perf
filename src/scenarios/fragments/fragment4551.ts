import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4549 } from "./fragment4549";
import type { FragmentToken4550 } from "./fragment4550";

export const FRAGMENT_4551 = gql(`
  fragment Fragment4551 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult4551 = ResultOf<typeof FRAGMENT_4551>;
type FragmentSelf4551 = NonNullable<FragmentResult4551>;

export type FragmentToken4551 =
  | FragmentSelf4551["__typename"]
  | FragmentSelf4551["typenameHint"] | FragmentToken4549 | FragmentToken4550;
