import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4061 } from "./fragment4061";
import type { FragmentToken4062 } from "./fragment4062";

export const FRAGMENT_4063 = gql(`
  fragment Fragment4063 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult4063 = ResultOf<typeof FRAGMENT_4063>;
type FragmentSelf4063 = NonNullable<FragmentResult4063>;

export type FragmentToken4063 =
  | FragmentSelf4063["__typename"]
  | FragmentSelf4063["typenameHint"] | FragmentToken4061 | FragmentToken4062;
