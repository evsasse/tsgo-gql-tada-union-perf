import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4641 } from "./fragment4641";
import type { FragmentToken4642 } from "./fragment4642";

export const FRAGMENT_4643 = gql(`
  fragment Fragment4643 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult4643 = ResultOf<typeof FRAGMENT_4643>;
type FragmentSelf4643 = NonNullable<FragmentResult4643>;

export type FragmentToken4643 =
  | FragmentSelf4643["__typename"]
  | FragmentSelf4643["typenameHint"] | FragmentToken4641 | FragmentToken4642;
