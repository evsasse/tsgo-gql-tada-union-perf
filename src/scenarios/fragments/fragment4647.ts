import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4645 } from "./fragment4645";
import type { FragmentToken4646 } from "./fragment4646";

export const FRAGMENT_4647 = gql(`
  fragment Fragment4647 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult4647 = ResultOf<typeof FRAGMENT_4647>;
type FragmentSelf4647 = NonNullable<FragmentResult4647>;

export type FragmentToken4647 =
  | FragmentSelf4647["__typename"]
  | FragmentSelf4647["typenameHint"] | FragmentToken4645 | FragmentToken4646;
