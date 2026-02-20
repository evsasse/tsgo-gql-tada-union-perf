import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4764 } from "./fragment4764";
import type { FragmentToken4765 } from "./fragment4765";

export const FRAGMENT_4766 = gql(`
  fragment Fragment4766 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult4766 = ResultOf<typeof FRAGMENT_4766>;
type FragmentSelf4766 = NonNullable<FragmentResult4766>;

export type FragmentToken4766 =
  | FragmentSelf4766["__typename"]
  | FragmentSelf4766["typenameHint"] | FragmentToken4764 | FragmentToken4765;
