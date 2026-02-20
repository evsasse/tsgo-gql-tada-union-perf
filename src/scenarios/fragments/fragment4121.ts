import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4119 } from "./fragment4119";
import type { FragmentToken4120 } from "./fragment4120";

export const FRAGMENT_4121 = gql(`
  fragment Fragment4121 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult4121 = ResultOf<typeof FRAGMENT_4121>;
type FragmentSelf4121 = NonNullable<FragmentResult4121>;

export type FragmentToken4121 =
  | FragmentSelf4121["__typename"]
  | FragmentSelf4121["typenameHint"] | FragmentToken4119 | FragmentToken4120;
