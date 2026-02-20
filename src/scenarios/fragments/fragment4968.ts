import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4966 } from "./fragment4966";
import type { FragmentToken4967 } from "./fragment4967";

export const FRAGMENT_4968 = gql(`
  fragment Fragment4968 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult4968 = ResultOf<typeof FRAGMENT_4968>;
type FragmentSelf4968 = NonNullable<FragmentResult4968>;

export type FragmentToken4968 =
  | FragmentSelf4968["__typename"]
  | FragmentSelf4968["typenameHint"] | FragmentToken4966 | FragmentToken4967;
