import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4442 } from "./fragment4442";
import type { FragmentToken4443 } from "./fragment4443";

export const FRAGMENT_4444 = gql(`
  fragment Fragment4444 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult4444 = ResultOf<typeof FRAGMENT_4444>;
type FragmentSelf4444 = NonNullable<FragmentResult4444>;

export type FragmentToken4444 =
  | FragmentSelf4444["__typename"]
  | FragmentSelf4444["typenameHint"] | FragmentToken4442 | FragmentToken4443;
