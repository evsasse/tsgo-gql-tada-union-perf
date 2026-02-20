import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4784 } from "./fragment4784";
import type { FragmentToken4785 } from "./fragment4785";

export const FRAGMENT_4786 = gql(`
  fragment Fragment4786 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult4786 = ResultOf<typeof FRAGMENT_4786>;
type FragmentSelf4786 = NonNullable<FragmentResult4786>;

export type FragmentToken4786 =
  | FragmentSelf4786["__typename"]
  | FragmentSelf4786["typenameHint"] | FragmentToken4784 | FragmentToken4785;
