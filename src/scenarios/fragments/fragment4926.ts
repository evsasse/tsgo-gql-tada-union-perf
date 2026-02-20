import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4924 } from "./fragment4924";
import type { FragmentToken4925 } from "./fragment4925";

export const FRAGMENT_4926 = gql(`
  fragment Fragment4926 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult4926 = ResultOf<typeof FRAGMENT_4926>;
type FragmentSelf4926 = NonNullable<FragmentResult4926>;

export type FragmentToken4926 =
  | FragmentSelf4926["__typename"]
  | FragmentSelf4926["typenameHint"] | FragmentToken4924 | FragmentToken4925;
