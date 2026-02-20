import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4766 } from "./fragment4766";
import type { FragmentToken4767 } from "./fragment4767";

export const FRAGMENT_4768 = gql(`
  fragment Fragment4768 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult4768 = ResultOf<typeof FRAGMENT_4768>;
type FragmentSelf4768 = NonNullable<FragmentResult4768>;

export type FragmentToken4768 =
  | FragmentSelf4768["__typename"]
  | FragmentSelf4768["typenameHint"] | FragmentToken4766 | FragmentToken4767;
