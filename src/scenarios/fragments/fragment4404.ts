import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4402 } from "./fragment4402";
import type { FragmentToken4403 } from "./fragment4403";

export const FRAGMENT_4404 = gql(`
  fragment Fragment4404 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult4404 = ResultOf<typeof FRAGMENT_4404>;
type FragmentSelf4404 = NonNullable<FragmentResult4404>;

export type FragmentToken4404 =
  | FragmentSelf4404["__typename"]
  | FragmentSelf4404["typenameHint"] | FragmentToken4402 | FragmentToken4403;
