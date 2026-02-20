import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4976 } from "./fragment4976";
import type { FragmentToken4977 } from "./fragment4977";

export const FRAGMENT_4978 = gql(`
  fragment Fragment4978 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult4978 = ResultOf<typeof FRAGMENT_4978>;
type FragmentSelf4978 = NonNullable<FragmentResult4978>;

export type FragmentToken4978 =
  | FragmentSelf4978["__typename"]
  | FragmentSelf4978["typenameHint"] | FragmentToken4976 | FragmentToken4977;
