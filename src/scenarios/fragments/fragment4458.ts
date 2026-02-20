import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4456 } from "./fragment4456";
import type { FragmentToken4457 } from "./fragment4457";

export const FRAGMENT_4458 = gql(`
  fragment Fragment4458 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult4458 = ResultOf<typeof FRAGMENT_4458>;
type FragmentSelf4458 = NonNullable<FragmentResult4458>;

export type FragmentToken4458 =
  | FragmentSelf4458["__typename"]
  | FragmentSelf4458["typenameHint"] | FragmentToken4456 | FragmentToken4457;
