import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4787 } from "./fragment4787";
import type { FragmentToken4788 } from "./fragment4788";

export const FRAGMENT_4789 = gql(`
  fragment Fragment4789 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult4789 = ResultOf<typeof FRAGMENT_4789>;
type FragmentSelf4789 = NonNullable<FragmentResult4789>;

export type FragmentToken4789 =
  | FragmentSelf4789["__typename"]
  | FragmentSelf4789["typenameHint"] | FragmentToken4787 | FragmentToken4788;
