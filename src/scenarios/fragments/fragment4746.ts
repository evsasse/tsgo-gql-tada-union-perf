import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4744 } from "./fragment4744";
import type { FragmentToken4745 } from "./fragment4745";

export const FRAGMENT_4746 = gql(`
  fragment Fragment4746 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult4746 = ResultOf<typeof FRAGMENT_4746>;
type FragmentSelf4746 = NonNullable<FragmentResult4746>;

export type FragmentToken4746 =
  | FragmentSelf4746["__typename"]
  | FragmentSelf4746["typenameHint"] | FragmentToken4744 | FragmentToken4745;
