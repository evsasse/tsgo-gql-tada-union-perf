import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4896 } from "./fragment4896";
import type { FragmentToken4897 } from "./fragment4897";

export const FRAGMENT_4898 = gql(`
  fragment Fragment4898 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult4898 = ResultOf<typeof FRAGMENT_4898>;
type FragmentSelf4898 = NonNullable<FragmentResult4898>;

export type FragmentToken4898 =
  | FragmentSelf4898["__typename"]
  | FragmentSelf4898["typenameHint"] | FragmentToken4896 | FragmentToken4897;
