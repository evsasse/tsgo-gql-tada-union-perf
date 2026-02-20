import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4980 } from "./fragment4980";
import type { FragmentToken4981 } from "./fragment4981";

export const FRAGMENT_4982 = gql(`
  fragment Fragment4982 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult4982 = ResultOf<typeof FRAGMENT_4982>;
type FragmentSelf4982 = NonNullable<FragmentResult4982>;

export type FragmentToken4982 =
  | FragmentSelf4982["__typename"]
  | FragmentSelf4982["typenameHint"] | FragmentToken4980 | FragmentToken4981;
