import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4567 } from "./fragment4567";
import type { FragmentToken4568 } from "./fragment4568";

export const FRAGMENT_4569 = gql(`
  fragment Fragment4569 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult4569 = ResultOf<typeof FRAGMENT_4569>;
type FragmentSelf4569 = NonNullable<FragmentResult4569>;

export type FragmentToken4569 =
  | FragmentSelf4569["__typename"]
  | FragmentSelf4569["typenameHint"] | FragmentToken4567 | FragmentToken4568;
