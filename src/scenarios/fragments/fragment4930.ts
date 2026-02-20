import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4928 } from "./fragment4928";
import type { FragmentToken4929 } from "./fragment4929";

export const FRAGMENT_4930 = gql(`
  fragment Fragment4930 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult4930 = ResultOf<typeof FRAGMENT_4930>;
type FragmentSelf4930 = NonNullable<FragmentResult4930>;

export type FragmentToken4930 =
  | FragmentSelf4930["__typename"]
  | FragmentSelf4930["typenameHint"] | FragmentToken4928 | FragmentToken4929;
