import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4144 } from "./fragment4144";
import type { FragmentToken4145 } from "./fragment4145";

export const FRAGMENT_4146 = gql(`
  fragment Fragment4146 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult4146 = ResultOf<typeof FRAGMENT_4146>;
type FragmentSelf4146 = NonNullable<FragmentResult4146>;

export type FragmentToken4146 =
  | FragmentSelf4146["__typename"]
  | FragmentSelf4146["typenameHint"] | FragmentToken4144 | FragmentToken4145;
