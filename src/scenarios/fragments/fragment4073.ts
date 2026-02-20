import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4071 } from "./fragment4071";
import type { FragmentToken4072 } from "./fragment4072";

export const FRAGMENT_4073 = gql(`
  fragment Fragment4073 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult4073 = ResultOf<typeof FRAGMENT_4073>;
type FragmentSelf4073 = NonNullable<FragmentResult4073>;

export type FragmentToken4073 =
  | FragmentSelf4073["__typename"]
  | FragmentSelf4073["typenameHint"] | FragmentToken4071 | FragmentToken4072;
