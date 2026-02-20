import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4763 } from "./fragment4763";
import type { FragmentToken4764 } from "./fragment4764";

export const FRAGMENT_4765 = gql(`
  fragment Fragment4765 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult4765 = ResultOf<typeof FRAGMENT_4765>;
type FragmentSelf4765 = NonNullable<FragmentResult4765>;

export type FragmentToken4765 =
  | FragmentSelf4765["__typename"]
  | FragmentSelf4765["typenameHint"] | FragmentToken4763 | FragmentToken4764;
