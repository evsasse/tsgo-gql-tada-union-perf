import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4877 } from "./fragment4877";
import type { FragmentToken4878 } from "./fragment4878";

export const FRAGMENT_4879 = gql(`
  fragment Fragment4879 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult4879 = ResultOf<typeof FRAGMENT_4879>;
type FragmentSelf4879 = NonNullable<FragmentResult4879>;

export type FragmentToken4879 =
  | FragmentSelf4879["__typename"]
  | FragmentSelf4879["typenameHint"] | FragmentToken4877 | FragmentToken4878;
