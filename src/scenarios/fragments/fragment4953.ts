import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4951 } from "./fragment4951";
import type { FragmentToken4952 } from "./fragment4952";

export const FRAGMENT_4953 = gql(`
  fragment Fragment4953 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult4953 = ResultOf<typeof FRAGMENT_4953>;
type FragmentSelf4953 = NonNullable<FragmentResult4953>;

export type FragmentToken4953 =
  | FragmentSelf4953["__typename"]
  | FragmentSelf4953["typenameHint"] | FragmentToken4951 | FragmentToken4952;
