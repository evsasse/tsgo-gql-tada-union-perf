import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4070 } from "./fragment4070";
import type { FragmentToken4071 } from "./fragment4071";

export const FRAGMENT_4072 = gql(`
  fragment Fragment4072 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult4072 = ResultOf<typeof FRAGMENT_4072>;
type FragmentSelf4072 = NonNullable<FragmentResult4072>;

export type FragmentToken4072 =
  | FragmentSelf4072["__typename"]
  | FragmentSelf4072["typenameHint"] | FragmentToken4070 | FragmentToken4071;
