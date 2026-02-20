import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4738 } from "./fragment4738";
import type { FragmentToken4739 } from "./fragment4739";

export const FRAGMENT_4740 = gql(`
  fragment Fragment4740 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult4740 = ResultOf<typeof FRAGMENT_4740>;
type FragmentSelf4740 = NonNullable<FragmentResult4740>;

export type FragmentToken4740 =
  | FragmentSelf4740["__typename"]
  | FragmentSelf4740["typenameHint"] | FragmentToken4738 | FragmentToken4739;
