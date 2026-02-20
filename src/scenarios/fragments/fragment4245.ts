import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4243 } from "./fragment4243";
import type { FragmentToken4244 } from "./fragment4244";

export const FRAGMENT_4245 = gql(`
  fragment Fragment4245 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult4245 = ResultOf<typeof FRAGMENT_4245>;
type FragmentSelf4245 = NonNullable<FragmentResult4245>;

export type FragmentToken4245 =
  | FragmentSelf4245["__typename"]
  | FragmentSelf4245["typenameHint"] | FragmentToken4243 | FragmentToken4244;
