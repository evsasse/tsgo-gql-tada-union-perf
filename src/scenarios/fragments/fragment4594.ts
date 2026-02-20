import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4592 } from "./fragment4592";
import type { FragmentToken4593 } from "./fragment4593";

export const FRAGMENT_4594 = gql(`
  fragment Fragment4594 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult4594 = ResultOf<typeof FRAGMENT_4594>;
type FragmentSelf4594 = NonNullable<FragmentResult4594>;

export type FragmentToken4594 =
  | FragmentSelf4594["__typename"]
  | FragmentSelf4594["typenameHint"] | FragmentToken4592 | FragmentToken4593;
