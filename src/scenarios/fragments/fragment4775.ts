import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4773 } from "./fragment4773";
import type { FragmentToken4774 } from "./fragment4774";

export const FRAGMENT_4775 = gql(`
  fragment Fragment4775 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult4775 = ResultOf<typeof FRAGMENT_4775>;
type FragmentSelf4775 = NonNullable<FragmentResult4775>;

export type FragmentToken4775 =
  | FragmentSelf4775["__typename"]
  | FragmentSelf4775["typenameHint"] | FragmentToken4773 | FragmentToken4774;
