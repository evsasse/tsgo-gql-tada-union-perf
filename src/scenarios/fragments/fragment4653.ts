import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4651 } from "./fragment4651";
import type { FragmentToken4652 } from "./fragment4652";

export const FRAGMENT_4653 = gql(`
  fragment Fragment4653 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult4653 = ResultOf<typeof FRAGMENT_4653>;
type FragmentSelf4653 = NonNullable<FragmentResult4653>;

export type FragmentToken4653 =
  | FragmentSelf4653["__typename"]
  | FragmentSelf4653["typenameHint"] | FragmentToken4651 | FragmentToken4652;
