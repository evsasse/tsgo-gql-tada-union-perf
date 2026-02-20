import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4566 } from "./fragment4566";
import type { FragmentToken4567 } from "./fragment4567";

export const FRAGMENT_4568 = gql(`
  fragment Fragment4568 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult4568 = ResultOf<typeof FRAGMENT_4568>;
type FragmentSelf4568 = NonNullable<FragmentResult4568>;

export type FragmentToken4568 =
  | FragmentSelf4568["__typename"]
  | FragmentSelf4568["typenameHint"] | FragmentToken4566 | FragmentToken4567;
