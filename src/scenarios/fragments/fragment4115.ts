import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4113 } from "./fragment4113";
import type { FragmentToken4114 } from "./fragment4114";

export const FRAGMENT_4115 = gql(`
  fragment Fragment4115 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult4115 = ResultOf<typeof FRAGMENT_4115>;
type FragmentSelf4115 = NonNullable<FragmentResult4115>;

export type FragmentToken4115 =
  | FragmentSelf4115["__typename"]
  | FragmentSelf4115["typenameHint"] | FragmentToken4113 | FragmentToken4114;
