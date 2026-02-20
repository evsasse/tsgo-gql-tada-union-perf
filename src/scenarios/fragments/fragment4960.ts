import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4958 } from "./fragment4958";
import type { FragmentToken4959 } from "./fragment4959";

export const FRAGMENT_4960 = gql(`
  fragment Fragment4960 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult4960 = ResultOf<typeof FRAGMENT_4960>;
type FragmentSelf4960 = NonNullable<FragmentResult4960>;

export type FragmentToken4960 =
  | FragmentSelf4960["__typename"]
  | FragmentSelf4960["typenameHint"] | FragmentToken4958 | FragmentToken4959;
