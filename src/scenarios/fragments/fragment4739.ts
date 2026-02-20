import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4737 } from "./fragment4737";
import type { FragmentToken4738 } from "./fragment4738";

export const FRAGMENT_4739 = gql(`
  fragment Fragment4739 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult4739 = ResultOf<typeof FRAGMENT_4739>;
type FragmentSelf4739 = NonNullable<FragmentResult4739>;

export type FragmentToken4739 =
  | FragmentSelf4739["__typename"]
  | FragmentSelf4739["typenameHint"] | FragmentToken4737 | FragmentToken4738;
