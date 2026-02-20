import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4196 } from "./fragment4196";
import type { FragmentToken4197 } from "./fragment4197";

export const FRAGMENT_4198 = gql(`
  fragment Fragment4198 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult4198 = ResultOf<typeof FRAGMENT_4198>;
type FragmentSelf4198 = NonNullable<FragmentResult4198>;

export type FragmentToken4198 =
  | FragmentSelf4198["__typename"]
  | FragmentSelf4198["typenameHint"] | FragmentToken4196 | FragmentToken4197;
