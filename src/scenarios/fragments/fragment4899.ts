import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4897 } from "./fragment4897";
import type { FragmentToken4898 } from "./fragment4898";

export const FRAGMENT_4899 = gql(`
  fragment Fragment4899 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult4899 = ResultOf<typeof FRAGMENT_4899>;
type FragmentSelf4899 = NonNullable<FragmentResult4899>;

export type FragmentToken4899 =
  | FragmentSelf4899["__typename"]
  | FragmentSelf4899["typenameHint"] | FragmentToken4897 | FragmentToken4898;
