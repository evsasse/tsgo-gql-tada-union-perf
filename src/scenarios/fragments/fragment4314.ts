import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4312 } from "./fragment4312";
import type { FragmentToken4313 } from "./fragment4313";

export const FRAGMENT_4314 = gql(`
  fragment Fragment4314 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult4314 = ResultOf<typeof FRAGMENT_4314>;
type FragmentSelf4314 = NonNullable<FragmentResult4314>;

export type FragmentToken4314 =
  | FragmentSelf4314["__typename"]
  | FragmentSelf4314["typenameHint"] | FragmentToken4312 | FragmentToken4313;
