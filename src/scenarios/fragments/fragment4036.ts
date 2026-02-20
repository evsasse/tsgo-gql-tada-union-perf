import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4034 } from "./fragment4034";
import type { FragmentToken4035 } from "./fragment4035";

export const FRAGMENT_4036 = gql(`
  fragment Fragment4036 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult4036 = ResultOf<typeof FRAGMENT_4036>;
type FragmentSelf4036 = NonNullable<FragmentResult4036>;

export type FragmentToken4036 =
  | FragmentSelf4036["__typename"]
  | FragmentSelf4036["typenameHint"] | FragmentToken4034 | FragmentToken4035;
