import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4681 } from "./fragment4681";
import type { FragmentToken4682 } from "./fragment4682";

export const FRAGMENT_4683 = gql(`
  fragment Fragment4683 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult4683 = ResultOf<typeof FRAGMENT_4683>;
type FragmentSelf4683 = NonNullable<FragmentResult4683>;

export type FragmentToken4683 =
  | FragmentSelf4683["__typename"]
  | FragmentSelf4683["typenameHint"] | FragmentToken4681 | FragmentToken4682;
