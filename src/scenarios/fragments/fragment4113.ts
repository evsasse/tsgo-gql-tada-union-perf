import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4111 } from "./fragment4111";
import type { FragmentToken4112 } from "./fragment4112";

export const FRAGMENT_4113 = gql(`
  fragment Fragment4113 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult4113 = ResultOf<typeof FRAGMENT_4113>;
type FragmentSelf4113 = NonNullable<FragmentResult4113>;

export type FragmentToken4113 =
  | FragmentSelf4113["__typename"]
  | FragmentSelf4113["typenameHint"] | FragmentToken4111 | FragmentToken4112;
