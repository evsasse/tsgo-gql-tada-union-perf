import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4031 } from "./fragment4031";
import type { FragmentToken4032 } from "./fragment4032";

export const FRAGMENT_4033 = gql(`
  fragment Fragment4033 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult4033 = ResultOf<typeof FRAGMENT_4033>;
type FragmentSelf4033 = NonNullable<FragmentResult4033>;

export type FragmentToken4033 =
  | FragmentSelf4033["__typename"]
  | FragmentSelf4033["typenameHint"] | FragmentToken4031 | FragmentToken4032;
