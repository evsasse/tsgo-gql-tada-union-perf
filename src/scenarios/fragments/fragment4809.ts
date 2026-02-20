import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4807 } from "./fragment4807";
import type { FragmentToken4808 } from "./fragment4808";

export const FRAGMENT_4809 = gql(`
  fragment Fragment4809 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult4809 = ResultOf<typeof FRAGMENT_4809>;
type FragmentSelf4809 = NonNullable<FragmentResult4809>;

export type FragmentToken4809 =
  | FragmentSelf4809["__typename"]
  | FragmentSelf4809["typenameHint"] | FragmentToken4807 | FragmentToken4808;
