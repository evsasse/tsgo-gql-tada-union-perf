import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4032 } from "./fragment4032";
import type { FragmentToken4033 } from "./fragment4033";

export const FRAGMENT_4034 = gql(`
  fragment Fragment4034 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult4034 = ResultOf<typeof FRAGMENT_4034>;
type FragmentSelf4034 = NonNullable<FragmentResult4034>;

export type FragmentToken4034 =
  | FragmentSelf4034["__typename"]
  | FragmentSelf4034["typenameHint"] | FragmentToken4032 | FragmentToken4033;
