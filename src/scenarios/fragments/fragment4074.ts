import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4072 } from "./fragment4072";
import type { FragmentToken4073 } from "./fragment4073";

export const FRAGMENT_4074 = gql(`
  fragment Fragment4074 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult4074 = ResultOf<typeof FRAGMENT_4074>;
type FragmentSelf4074 = NonNullable<FragmentResult4074>;

export type FragmentToken4074 =
  | FragmentSelf4074["__typename"]
  | FragmentSelf4074["typenameHint"] | FragmentToken4072 | FragmentToken4073;
