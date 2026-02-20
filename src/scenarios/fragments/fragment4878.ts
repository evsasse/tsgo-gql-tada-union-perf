import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4876 } from "./fragment4876";
import type { FragmentToken4877 } from "./fragment4877";

export const FRAGMENT_4878 = gql(`
  fragment Fragment4878 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult4878 = ResultOf<typeof FRAGMENT_4878>;
type FragmentSelf4878 = NonNullable<FragmentResult4878>;

export type FragmentToken4878 =
  | FragmentSelf4878["__typename"]
  | FragmentSelf4878["typenameHint"] | FragmentToken4876 | FragmentToken4877;
