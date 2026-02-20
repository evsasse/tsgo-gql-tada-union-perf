import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4101 } from "./fragment4101";
import type { FragmentToken4102 } from "./fragment4102";

export const FRAGMENT_4103 = gql(`
  fragment Fragment4103 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult4103 = ResultOf<typeof FRAGMENT_4103>;
type FragmentSelf4103 = NonNullable<FragmentResult4103>;

export type FragmentToken4103 =
  | FragmentSelf4103["__typename"]
  | FragmentSelf4103["typenameHint"] | FragmentToken4101 | FragmentToken4102;
