import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4081 } from "./fragment4081";
import type { FragmentToken4082 } from "./fragment4082";

export const FRAGMENT_4083 = gql(`
  fragment Fragment4083 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult4083 = ResultOf<typeof FRAGMENT_4083>;
type FragmentSelf4083 = NonNullable<FragmentResult4083>;

export type FragmentToken4083 =
  | FragmentSelf4083["__typename"]
  | FragmentSelf4083["typenameHint"] | FragmentToken4081 | FragmentToken4082;
