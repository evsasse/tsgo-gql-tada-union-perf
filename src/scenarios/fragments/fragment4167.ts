import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4165 } from "./fragment4165";
import type { FragmentToken4166 } from "./fragment4166";

export const FRAGMENT_4167 = gql(`
  fragment Fragment4167 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult4167 = ResultOf<typeof FRAGMENT_4167>;
type FragmentSelf4167 = NonNullable<FragmentResult4167>;

export type FragmentToken4167 =
  | FragmentSelf4167["__typename"]
  | FragmentSelf4167["typenameHint"] | FragmentToken4165 | FragmentToken4166;
