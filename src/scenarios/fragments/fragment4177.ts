import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4175 } from "./fragment4175";
import type { FragmentToken4176 } from "./fragment4176";

export const FRAGMENT_4177 = gql(`
  fragment Fragment4177 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult4177 = ResultOf<typeof FRAGMENT_4177>;
type FragmentSelf4177 = NonNullable<FragmentResult4177>;

export type FragmentToken4177 =
  | FragmentSelf4177["__typename"]
  | FragmentSelf4177["typenameHint"] | FragmentToken4175 | FragmentToken4176;
