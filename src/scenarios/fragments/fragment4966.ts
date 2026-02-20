import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4964 } from "./fragment4964";
import type { FragmentToken4965 } from "./fragment4965";

export const FRAGMENT_4966 = gql(`
  fragment Fragment4966 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult4966 = ResultOf<typeof FRAGMENT_4966>;
type FragmentSelf4966 = NonNullable<FragmentResult4966>;

export type FragmentToken4966 =
  | FragmentSelf4966["__typename"]
  | FragmentSelf4966["typenameHint"] | FragmentToken4964 | FragmentToken4965;
