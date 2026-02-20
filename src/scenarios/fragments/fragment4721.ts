import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4719 } from "./fragment4719";
import type { FragmentToken4720 } from "./fragment4720";

export const FRAGMENT_4721 = gql(`
  fragment Fragment4721 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult4721 = ResultOf<typeof FRAGMENT_4721>;
type FragmentSelf4721 = NonNullable<FragmentResult4721>;

export type FragmentToken4721 =
  | FragmentSelf4721["__typename"]
  | FragmentSelf4721["typenameHint"] | FragmentToken4719 | FragmentToken4720;
