import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4674 } from "./fragment4674";
import type { FragmentToken4675 } from "./fragment4675";

export const FRAGMENT_4676 = gql(`
  fragment Fragment4676 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult4676 = ResultOf<typeof FRAGMENT_4676>;
type FragmentSelf4676 = NonNullable<FragmentResult4676>;

export type FragmentToken4676 =
  | FragmentSelf4676["__typename"]
  | FragmentSelf4676["typenameHint"] | FragmentToken4674 | FragmentToken4675;
