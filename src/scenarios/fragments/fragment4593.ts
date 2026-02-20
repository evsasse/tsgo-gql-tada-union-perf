import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4591 } from "./fragment4591";
import type { FragmentToken4592 } from "./fragment4592";

export const FRAGMENT_4593 = gql(`
  fragment Fragment4593 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult4593 = ResultOf<typeof FRAGMENT_4593>;
type FragmentSelf4593 = NonNullable<FragmentResult4593>;

export type FragmentToken4593 =
  | FragmentSelf4593["__typename"]
  | FragmentSelf4593["typenameHint"] | FragmentToken4591 | FragmentToken4592;
