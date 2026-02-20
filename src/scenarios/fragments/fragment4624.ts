import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4622 } from "./fragment4622";
import type { FragmentToken4623 } from "./fragment4623";

export const FRAGMENT_4624 = gql(`
  fragment Fragment4624 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult4624 = ResultOf<typeof FRAGMENT_4624>;
type FragmentSelf4624 = NonNullable<FragmentResult4624>;

export type FragmentToken4624 =
  | FragmentSelf4624["__typename"]
  | FragmentSelf4624["typenameHint"] | FragmentToken4622 | FragmentToken4623;
