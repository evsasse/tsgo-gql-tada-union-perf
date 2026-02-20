import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4952 } from "./fragment4952";
import type { FragmentToken4953 } from "./fragment4953";

export const FRAGMENT_4954 = gql(`
  fragment Fragment4954 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult4954 = ResultOf<typeof FRAGMENT_4954>;
type FragmentSelf4954 = NonNullable<FragmentResult4954>;

export type FragmentToken4954 =
  | FragmentSelf4954["__typename"]
  | FragmentSelf4954["typenameHint"] | FragmentToken4952 | FragmentToken4953;
